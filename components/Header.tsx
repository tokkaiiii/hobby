import Image from "next/image";

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="relative overflow-y-auto h-full w-full">
      <section className="absolute top-0 w-full">
        <div className="relative w-full h-[400px]">
          <Image
            fill
            className="object-cover"
            alt="main-image"
            src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="absolute top-0 bg-black opacity-40 w-full h-[400px]"></div>
          <div className="absolute top-0 bg-gradient-to-t from-black w-full h-[400px]"></div>
        </div>
      </section>
      <section className="sticky top-0"></section>
      <section className="relative">{children}</section>
    </header>
  );
}
