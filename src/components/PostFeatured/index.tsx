import PostCoverImage from "../PostCoverImage";
import PostSummary from "../PostSummary";
import { findAllPublicPostsCached } from "@/src/lib/post/queries";

export default async function PostFeatured() {

  const posts = await findAllPublicPostsCached();
  const post = posts[0]; // Pega o primeiro post como destaque para demonstração
  const postLink = `/post/${post.slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2  group">
        <PostCoverImage
          linkProps={{ href: postLink }}
          imageProps={{
            src: post.coverImageUrl,
            width: 1200,
            height: 720,
            alt: post.title,
            priority: true,
          }} />

        <PostSummary
          postHeading="h1"
          postLink={postLink}
          createdAt={post.createdAt}
          title={post.title}
          excerpt={post.excerpt}
        />
      </section>
  );
}
