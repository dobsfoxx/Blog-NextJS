import clsx from "clsx";
import Link from "next/link";

export default function Footer(){
  return (
   <footer>
        <p
          className={clsx(
            "text-center",
            "text-slate-600",
            "bg-slate-100",
            "font-bold text-xl",
            "py-6",


          )}
        >
          Copyright &copy; <Link href="/">TSWind Blog</Link> 2025
        </p>
      </footer>
  );
}
