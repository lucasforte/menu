interface Props {
  children: JSX.Element;
}

export function MainFrame({ children }: Props) {
  return (
    <div className="flex justify-center items-center flex-col w-[100vw] h-[100vh] fixed bg-slate-300 overflow-hidden md:py-2">
      <main className="h-full w-full flex flex-col md:w-[432px] md:rounded-lg md:shadow-lg">
        {children}
      </main>
    </div>
  );
}
