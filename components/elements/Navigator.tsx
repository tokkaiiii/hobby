'use client'
import { useMemo } from "react";
import { GoHome } from "react-icons/go";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IoFastFoodOutline } from "react-icons/io5";
export default function Navigator() {
    const pathname = usePathname();
    const routes = useMemo(() => [
        {
            label: "Home",
            icon: <GoHome size={24} />,
            isActive: pathname === "/",
            href: "/",
        },
        {
            label: "Food",
            icon: <IoFastFoodOutline size={24} />,
            isActive: pathname === "/food",
            href: "/food",
        }
    ], [pathname]);
  return (
    <div>
        <section className="flex flex-col gap-2 p-4">
            {routes.map((route) => (
                <Link href={route.href} key={route.label}>
                <div className={cn(
                    "text-[16px] flex flex-row items-center gap-4 hover:bg-neutral-700 rounded-lg p-2",
                    route.isActive && "bg-neutral-800"  
                )}>
                    {route.icon}
                    <span>{route.label}</span>
                </div>
            </Link>
            ))}
        </section>
        <section className="px-6">
            <div className="w-full h-[1px] bg-neutral-700">
            </div>
        </section>
    </div>
  );
}