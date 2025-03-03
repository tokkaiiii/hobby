'use client'
import { Post } from "@/types/domain";
import Image from "next/image";
import { FiPlay } from "react-icons/fi";
import IconButton from "./elements/IconButton";
import { MdMoreVert } from "react-icons/md";
import { getImageUrl } from "@/api/storage";
import { useRouter } from "next/navigation";
interface PostCardProps {
    post: Post
    imageUrl: string
}   

export default function PostCard({ post, imageUrl }: PostCardProps) {
    const router = useRouter();
    const handleClickPost = () => {
        router.push(`/post/${post.id}`);
    }

    return (
        <article className="h-[240px] cursor-pointer" onClick={handleClickPost}>
            <section className="relative h-[136px] group">
                <Image 
                    src={imageUrl} 
                    alt={post.title} 
                    fill
                    className="object-cover"
                />
                <div className="relative hidden group-hover:block bg-gradient-to-b from-[rgba(0,0,0,0.7)] top-0 w-full h-[136px]">
                    <div className="absolute top-2 right-4">
                        <IconButton icon={<MdMoreVert size={20}/>}  />
                    </div>
                </div>  
            </section>
            <section className="mt-2">
                <div>{post.title}</div>
                <div className="text-neutral-500">{post.subtitle}</div>
            </section>
        </article>
    )
}   