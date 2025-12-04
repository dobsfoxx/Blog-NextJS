import clsx from "clsx";
import ReactMarkDown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

type SafeMarkdownProps = {
  markdown: string;
};

export function SafeMarkdown({ markdown }: SafeMarkdownProps) {
  return (
    <div
      className={clsx(
        "prose",
        "prose-slate w-full max-w-none",
        "overflow-hidden",
        "prose-a:no-underline",
        "prose-a:text-blue-500",
        "prose-a:hover:text-blue-800",
        "prose-img: mx-auto",
        "md:prose-lg",
      )}
    >
      <ReactMarkDown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({ node, ...props }) => (
            <table className="table-auto border border-slate-300 " {...props} />
          ),
          th: ({ node, ...props }) => (
            <th className="border border-slate-300 bg-slate-200 px-4 py-2 text-center" {...props} />
          ),
          td: ({ node, ...props }) => (
            <td className="border border-slate-300 px-4 py-2 text-center" {...props} />
          ),
        }}
      >
        {markdown}
      </ReactMarkDown>
    </div>
  );
}
