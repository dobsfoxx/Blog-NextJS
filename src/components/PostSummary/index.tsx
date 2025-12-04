import PostHeading from './../PostHeading/index';
import { PostDate } from "../PostDate";


type PostSummaryProps = {
  postHeading: 'h1' | 'h2';
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
  };

export default function PostSummary({postHeading, postLink, createdAt, title, excerpt}: PostSummaryProps) {
  return (
    <div className="flex flex-col  sm:justify-center">
              <PostDate dateTime={createdAt} /> {/* Componente de data do post */ }

              <PostHeading url={postLink} as={postHeading}>
                {/* Componente de titulos do post*/ }
                {title}
              </PostHeading>

              <p>{excerpt}</p> {/* Resumo do post via postmodel */ }
            </div>
  );
}
