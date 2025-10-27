import { postRepository } from "@/src/repositories/post/json-post-repository";
import { clsx } from "clsx";

export default async function LoadingPage() {
  const posts = await postRepository.findAll();

  return (
    <main>
      {posts.map(post =>{
                return (

                  <article key={post.id}>
                    <h2 className={clsx("text-xl", "font-bold", "text-orange-400")}>
                      {post.title}
                    </h2>

                  </article>
                );
      })}
    </main>
  );
}
