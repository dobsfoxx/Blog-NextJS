import SpinLoader from "../components/SpinLoader";
import { Suspense } from "react";
import PostsList from "../components/PostsList";
import PostFeatured from "../components/PostFeatured";

export default async function HomePage() {
  return (
    <>
      <PostFeatured />{" "}
      {/* Componente do post em destaque na página principal */}
      <Suspense fallback={<SpinLoader className="my-20" />}>
        {" "}
        {/* Suspense para carregamento assíncrono via NextJS importando o componenteSpinLoader*/}
        <PostsList />
      </Suspense>
    </>
  );
}
