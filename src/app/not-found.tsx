import clsx from "clsx";

export default function NotFoundPage(){
  return (

    <div className={clsx(
          "min-h-80 bg-slate-900 text-slate-100 mb-16 p-8 rounded-xl flex items-center justify-center text-center my-40",
        )}>
      <title>404 - Pagina não encontrada</title>
      <div>
        <h1 className={clsx(
          "text-4xl/tight font-extrabold mb-4",
        )} >404 - Page Not Found</h1>
        <p >Desculpe, esse caminho não foi encontrado :( </p>
      </div>
    </div>
  )
}
