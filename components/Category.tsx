import { categories } from "@/lib/data";
import Image from "next/image";
export default function Category() {
    
    return (
        <ul className="max-w-full overflow-x-auto flex flex-row gap-4">
            {categories.map((category) => (
                <li key={category.label}
                className="h-[38px] px-4 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-neutral-700 cursor-pointer"
                >
                    {category.label}
                </li>
            ))}
        </ul>
    )
}