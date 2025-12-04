import { findPostBySlugCached } from "@/src/lib/post/queries";
import Image from "next/image";
import PostHeading from "../PostHeading";
import { PostDate } from "../PostDate";
import { SafeMarkdown } from "../SafeMarkdown/inde";

type SinglePostProps = {
  slug: string;
};

export default async function SinglePost({ slug }: SinglePostProps) {

  const post = await findPostBySlugCached(slug);


  return (

    <article className="flex flex-col gap-4 mb-16">
      <Image
        src={post.coverImageUrl}
        alt={post.title}
        width={1200}
        height={720}
        className="rounded-xl mb-4"
      />
      <PostHeading url={`/post/${post.slug}`} >{post.title}</PostHeading>
      <p>{post.author} | <PostDate dateTime={post.createdAt} /></p>

       <SafeMarkdown markdown={post.content} />


    </article>


  )
}
