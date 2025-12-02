import PostCoverImage from "../PostCoverImage";
import PostSummary from "../PostSummary";

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

        <PostSummary
          postHeading="h1"
          postLink={postLink}
          createdAt="2025-04-20T10:00"
          title="Featured Post"
          excerpt="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum pariatur perferendis nostrum nulla quidem neque aspernatur. Cum eius cupiditate ab esse tempore, corporis veniam consectetur similique facilis? Praesentium, ipsam consequuntur."
        />
      </section>
  );
}
