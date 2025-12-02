import PostCoverImage from "../PostCoverImage";
import PostSummary from "../PostSummary";
import { findAllPublicPosts } from "@/src/lib/post/queries";

export default async function LoadingPage() {
  const posts = await findAllPublicPosts();

  return (
    <div className="grid grid-cols-1 gap-8 pb-8 sm:grid-cols-2 lg:grid-cols-3 ">
     {/* Layout principal para a lista de posts */}
     {posts.slice(1).map((post) => {
      {/* Ignora o primeiro post (destaque) */}
       const postLink = `/post/${post.slug}`;  {/* Link para a página do post via slug via postModel */}

        return (
          <div key={post.id} className="flex flex-col group gap-4">
            {/* Componente de imagem do post */}
            <PostCoverImage
              linkProps={{ href: postLink }}
              imageProps={{
                src: post.coverImageUrl,
                width: 1200,
                height: 720,
                alt: post.title,
                priority: true,
              }}
            />
            {/* Componente de resumo do post */}
            <PostSummary
              postHeading="h2"
              postLink={postLink}
              createdAt={post.createdAt}
              title={post.title}
              excerpt={post.excerpt}
            />
          </div>
        );
      })}
    </div>
  );
}
