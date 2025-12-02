import { formatDateTime, formatRelativeTime } from "@/src/utils/format-dateTime";
import PostHeading from './../PostHeading/index';


type PostSummaryProps = {
  postHeading: 'h1' | 'h2';
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
  };

export default function PostSummary({postHeading, postLink, createdAt, title, excerpt}: PostSummaryProps) {
  return (
    <div className="flex flex-col  sm:justify-center">
              <time
                dateTime={createdAt}
                className="text-slate-600  block text-sm"
                title={formatRelativeTime(createdAt)}
              >
                {formatDateTime(createdAt)}

              </time>

              <PostHeading url={postLink} as={postHeading}>
                {/* Componente de titulos do post*/ }
                {title}
              </PostHeading>

              <p>{excerpt}</p> {/* Resumo do post via postmodel */ }
            </div>
  );
}
