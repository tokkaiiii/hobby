'use client'
import { categories } from "@/lib/data";
import useUIState from "@/store/useUIState";
import Image from "next/image";
import { cn } from "@/lib/utils";
export default function Category() {
    const { categoryLabel, setCategoryLabel, setHeaderImageSrc } = useUIState();

    const handleClickCategory = (category: { label: string, src: string }) => {
        if (categoryLabel === category.label) {
            setCategoryLabel("");
            setHeaderImageSrc("");
        } else {
            setCategoryLabel(category.label);    
            setHeaderImageSrc(category.src);
        }
    }

    return (
        <ul className="max-w-full overflow-x-auto flex flex-row gap-4">
            {categories.map((category) => (
                <li key={category.label}
                onClick={() => handleClickCategory(category)}
                className={cn("h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer",
                    categoryLabel === category.label && "bg-white text-black hover:bg-white")}    >
                    {category.label}
                </li>
            ))}
        </ul>
    )
}