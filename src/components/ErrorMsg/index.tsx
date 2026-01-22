type ErrorMsgProps = {
  pageTitle: string;
  contentTitle: string;
  content: React.ReactNode;
};

import clsx from "clsx";
import React from "react";

export default function ErrorMsg({ pageTitle, contentTitle, content }: ErrorMsgProps){
  return (

    <div className={clsx(
          "min-h-80 bg-slate-900 text-slate-100 mb-16 p-8 rounded-xl flex items-center justify-center text-center my-40",
        )}>
      <title>{pageTitle}</title>
      <div>
        <h1 className={clsx(
          "text-4xl/tight font-extrabold mb-4",
        )} >{contentTitle}</h1>
        <div >{content}</div>
      </div>
    </div>
  )
}
