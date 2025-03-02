export default function Sidebar({ children }: { children: React.ReactNode}) {
  return (
    <div className="flex flex-row h-full">
        <nav className="w-64 border-r-[1px] border-gray-200">
            <div className="p-[24px]">
                로고
            </div>
            <div>
                메뉴
            </div>
        </nav>
      <div className="flex-1">
      {children}
      </div>
    </div>
  );
}