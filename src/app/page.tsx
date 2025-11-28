import clsx from "clsx";
import SpinLoader from "../components/SpinLoader";
import { Suspense } from "react";
import PostsList from "../components/PostsList";
import Container from "../components/container";
import Header from "../components/Header";
import PostHeading from "../components/PostHeading/inde";
import PostCoverImage from "../components/PostCoverImage";

export default async function HomePage() {
  return (
    <Container>
      <Header />
      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2  group">
        <PostCoverImage
          linkProps={{ href: "#" }}
          imageProps={{
            src: "/images/bryen_9.png",
            width: 1200,
            height: 720,
            alt: "Cover Image",
            priority: true,
          }} />

        <div className="flex flex-col  sm:justify-center">
          <time
            dateTime="2025-04-20T10:00"
            className="text-slate-600  block text-sm"
          >
            20/04/2025 10:00
          </time>

         <PostHeading url="#" as="h1" />

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
            pariatur perferendis nostrum nulla quidem neque aspernatur. Cum eius
            cupiditate ab esse tempore, corporis veniam consectetur similique
            facilis? Praesentium, ipsam consequuntur.
          </p>
        </div>
      </section>
      <Suspense fallback={<SpinLoader className="my-20" />}>
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
