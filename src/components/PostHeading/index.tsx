type PostHeadingProps = {
  children?: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2';
};
/*Props para Link e uso da Tag A */
import clsx from "clsx";
import Link from "next/link";


export default function PostHeading( {children, url, as:Tag='h2'}: PostHeadingProps) {

  const headingClassesMap = {
    h1: "text-2xl/tight  mb-4 sm:text-4xl/tight",
    h2: "text-2xl/tight font-bold mb-4 ",/*classes dos headers*/
};

  const commonClasses = "";

  return (
     <Tag className={clsx(headingClassesMap[Tag], commonClasses)}>
            <Link href={url}
              className="text-2xl font-bold hover:text-blue-900 transition-colors duration-200"
            >{children }
            </Link>
          </Tag>
  )
}
