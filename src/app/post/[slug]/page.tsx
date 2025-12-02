import { findPostBySlugCached } from "@/src/lib/post/queries";
import { notFound } from "next/navigation";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>; //Indica que params é uma Promise que resolve para um objeto com a propriedade slug do tipo string
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  //params é desestruturado do objeto passado como argumento

  const { slug } = await params; //Aguarda a resolução da Promise params e desestrutura o valor de slug do objeto resultante

  let post;

  try{
    post = await findPostBySlugCached(slug)
  }catch{
    post = undefined;
  }
  if(!post) notFound();



  return (
  <div>{post.title}</div>
);

}
