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
                className={cn(
                    "h-[38px] px-4 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-neutral-700 cursor-pointer",
                    categoryLabel === category.label && "bg-neutral-700"
                )}
                >
                    {category.label}
                </li>
            ))}
        </ul>
    )
}