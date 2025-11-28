type PostHeadingProps = {
  children?: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2';
};

import clsx from "clsx";
import Link from "next/link";


export default function PostHeading( {children, url, as:Tag='h2'}: PostHeadingProps) {
  const headingClassesMap = {
    h1: "text-2xl/tight  mb-4 sm:text-4xl/tight",
    h2: "text-2xl/tight font-extrabold mb-4 sm:text-3xl/tight",
  };
  const commonClasses = "font-extrabold ";

  return (
     <Tag className={clsx(headingClassesMap[Tag], commonClasses)}>
            <Link href={url}
              className="text-2xl font-bold text-slate-900  hover:underline"
            >{children }
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              magni?
            </Link>
          </Tag>
  )
}
