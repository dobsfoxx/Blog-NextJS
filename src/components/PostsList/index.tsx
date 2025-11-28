import { postRepository } from "@/src/repositories/post/json-post-repository";
import PostCoverImage from "../PostCoverImage";
import PostHeading from "../PostHeading";

export default async function LoadingPage() {
  const posts = await postRepository.findAll();

  return (
    <div className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 lg:grid-cols-3 ">
     {/* Layout principal para a lista de posts */}
     {posts.map((post) => {

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
            <div className="flex flex-col  sm:justify-center">
              <time
                dateTime={post.createdAt}
                className="text-slate-600  block text-sm"
              >
                20/04/2025 10:00
              </time>

              <PostHeading url={postLink} as="h2">
                {/* Componente de titulos do post*/ }
                {post.title}
              </PostHeading>

              <p>{post.excerpt}</p> {/* Resumo do post via postmodel */ }
            </div>
          </div>
        );
      })}
    </div>
  );
}
