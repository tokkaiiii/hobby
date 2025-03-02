import Logo from "./elements/Logo";
import Navigator from "./elements/Navigator";
export default function Sidebar({ children }: { children: React.ReactNode}) {
  return (
    <div className="flex flex-row h-full">
        <nav className="w-[240px] border-r-[1px] border-neutral-600 hidden lg:block">
            <div className="p-[24px]">
                <Logo />    
            </div>
            <div>
                <Navigator />
            </div>
        </nav>
      <div className="flex-1">
      {children}
      </div>
    </div>
  );
}