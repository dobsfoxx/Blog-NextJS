import clsx from "clsx";
import SpinLoader from "../components/SpinLoader";
import { Suspense } from "react";
import PostsList from "../components/PostsList";

export default async function HomePage() {

  return (
    <main className="text-slate-900 bg-slate-100 min-h-screen">
      <header>
        <h1 className={clsx("text-6xl", "font-bold", "text-gray-800", "text-center", "py-8")}>
          Blog Posts
        </h1>
      </header>

      <Suspense fallback={<SpinLoader className="my-20"/>}>
        <PostsList />
      </Suspense>

      <footer>
        <p className={clsx("text-center", "py-4", "text-center", "font-bold")}>
          &copy; {new Date().getFullYear()} My Blog
        </p>
      </footer>
    </main>
  );
}
