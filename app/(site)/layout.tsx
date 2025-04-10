import Header from "@/components/Header";

export default function Layout({children}:{children : React.ReactNode}) {
  return (
    <div className="h-full w-full">
        <Header>
            {children}
        </Header>
    </div>
  );
}