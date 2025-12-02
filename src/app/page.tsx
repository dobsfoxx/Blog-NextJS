import clsx from "clsx";
import SpinLoader from "../components/SpinLoader";
import { Suspense } from "react";
import PostsList from "../components/PostsList";
import Container from "../components/container";
import Header from "../components/Header";
import PostFeatured from "../components/PostFeatured";

export default async function HomePage() {
  return (
    <Container>

      <Header />

      <PostFeatured /> {/* Componente do post em destaque na página principal */}

      <Suspense fallback={<SpinLoader className="my-20" />}> {/* Suspense para carregamento assíncrono via NextJS importando o componenteSpinLoader*/}
        <PostsList />
      </Suspense>

      <footer>
        <p
          className={clsx(
            "text-center",
            "py-4",
            "text-center",
            "font-extrabold text-4xl"
          )}
        >
          My Blog &copy; 2024
        </p>
      </footer>

    </Container>
  );
}
