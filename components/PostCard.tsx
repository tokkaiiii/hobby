import { Post } from "@/types/domain";
import Image from "next/image";
import { FiPlay } from "react-icons/fi";
import IconButton from "./elements/IconButton";
import { MdMoreVert } from "react-icons/md";

interface PostCardProps {
    post: Post
}   

export default function PostCard({ post }: PostCardProps) {
    return (
        <article className="h-[240px] cursor-pointer">
            <section className="relative h-[136px]">
                <Image 
                    src={post.thumbnail} 
                    alt={post.title} 
                    fill
                    className="object-cover"
                />
                <div className="relative hidden group-hover:block bg-gradient-to-b from-[rgba(0,0,0,0.7)] top-0 w-full h-[136px]">
                    <div className="absolute top-2 right-4">
                        <IconButton icon={<MdMoreVert size={20}/>}  />
                    </div>
                    <div 
                    className="absolute bottom-4 right-4 flex items-center justify-center 
                    transform-gpu transition-transform hover:scale-110
                    bg-[rgba(0,0,0,0.7)] w-[45px] h-[45px] rounded-full
                    hover:bg-[rgba(0,0,0,0.9)] pl-[1.5px]">
                        <FiPlay size={20}/>
                    </div>
                </div>  
            </section>
            <section className="relative w-full h-full">
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="text-sm text-gray-500">{post.subtitle}</p>
            </section>
        </article>
    )
}   