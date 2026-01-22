import SinglePost from "@/src/components/SinglePost";
import SpinLoader from "@/src/components/SpinLoader";
import { findPostBySlugCached } from "@/src/lib/post/queries";
import { Metadata } from "next";
import { Suspense } from "react";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>; //Indica que params é uma Promise que resolve para um objeto com a propriedade slug do tipo string
};
export async function generateMetadata({ params }: PostSlugPageProps): Promise<Metadata> {

  throw new Error("Erro na Slug");

  const { slug } = await params;
  const post = await findPostBySlugCached(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  //params é desestruturado do objeto passado como argumento

  const { slug } = await params; //Aguarda a resolução da Promise params e desestrutura o valor de slug do objeto resultante


  return (

    <Suspense fallback={<SpinLoader className="min-h-20 "/>}>
      <SinglePost slug={slug} />
    </Suspense>
);

}
