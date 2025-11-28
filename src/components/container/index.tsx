type ContainerProps = {
  children: React.ReactNode;
};
/*Tipagem para Container receber conteúdo via 'children' */

export default function Container({ children }: ContainerProps) {
  return (
    <main className="text-slate-900 bg-slate-100 min-h-screen">
      <div className="max-w-screen-lg mx-auto px-8">
        {children}
      </div>
    </main>
  );
}
