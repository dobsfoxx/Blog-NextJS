import SpinLoader from "../components/SpinLoader";
import { Suspense } from "react";
import PostsList from "../components/PostsList";
import PostFeatured from "../components/PostFeatured";

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader className="min-h-20 mb-16" /> }>
        <PostFeatured />
        {/* Componente do post em destaque na página principal */}
        {/* Suspense para carregamento assíncrono via NextJS importando o componenteSpinLoader*/}
        <PostsList />
      </Suspense>
    </>
  );
}
