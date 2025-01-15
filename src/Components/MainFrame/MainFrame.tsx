interface Props {
  children: JSX.Element;
}

export function MainFrame({ children }: Props) {
  return (
    <div className="flex justify-center items-center flex-col w-[100vw] h-[100vh] fixed bg-slate-300 overflow-hidden md:py-2">
      <header className="h-[64px] w-full relative flex justify-between items-center bg-white px-4 py-2 md:w-[432px] md:px-6 md:py-3 rounded-t-lg">
        <h1 className="text-2xl font-bold">Cardápio Online</h1>
      </header>
      <main className="h-full w-full flex flex-col md:w-[432px] md:rounded-lg md:shadow-lg">
        {children}
      </main>
    </div>
  );
}
