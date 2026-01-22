'use client';

import { use, useEffect } from "react";
import ErrorMsg from "../components/ErrorMsg";

type RootErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function RootErrorPage({error, reset}: RootErrorPageProps){
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <ErrorMsg pageTitle="404 - Pagina não encontrada"
        contentTitle="404 - Page Not Found"
        content={
          <button onClick={() => reset()} className="underline">Tentar Novamente</button>
        }
      />


    </>
  )
}
