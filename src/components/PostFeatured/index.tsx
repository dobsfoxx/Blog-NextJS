import PostCoverImage from "../PostCoverImage";
import PostHeading from "../PostHeading";

export default function PostFeatured() {
  const slug = "featured-post";
  const postLink = `/post/${slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2  group">
        <PostCoverImage
          linkProps={{ href: postLink }}
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

         <PostHeading url={postLink} as="h1" />

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
            pariatur perferendis nostrum nulla quidem neque aspernatur. Cum eius
            cupiditate ab esse tempore, corporis veniam consectetur similique
            facilis? Praesentium, ipsam consequuntur.
          </p>
        </div>
      </section>
  );
}
