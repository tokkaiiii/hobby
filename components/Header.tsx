"use client";

import Image from "next/image";
import PagePadding from "./PagePadding";
import { FiSearch } from "react-icons/fi";
import { DrawerContent } from "./ui/drawer";
import { Drawer } from "./ui/drawer";
import { DrawerTrigger } from "./ui/drawer";
import { useState } from "react";
import Logo from "@/components/elements/Logo";
import Navigator from "@/components/elements/Navigator";

const HeaderDrawer = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger>{children}</DrawerTrigger>
        <DrawerContent className="w-[240px] h-full">
          {/* 로고 */}
          {/* 네비게이션 + 재생목록 */}
          <div className="py-3">
            <div className="px-3">
              <Logo isInDrawer onClickClose={() => setIsOpen(false)} />
            </div>
            <Navigator />
          </div>
        </DrawerContent>
      </Drawer>
    );
  };

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
      <section className="sticky top-0">
        <PagePadding>
            <div className="h-[64px] flex flex-row items-center justify-between">
            <article
              className="h-[42px] min-w-[480px] hidden lg:flex flex-row items-center 
            bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px] border border-neutral-500"
            >
                    <div>
                        <FiSearch size={24}/>
                    </div>
                    <input 
                    type="text" 
                    placeholder="Search" 
                    className="bg-transparent outline-none h-full w-full"
                    />
                </article>
                <HeaderDrawer>
              <article className="lg:hidden">
                <Logo />
              </article>
            </HeaderDrawer>
            </div>
        </PagePadding>
      </section>
      <section className="relative">{children}</section>
    </header>
  );
}
