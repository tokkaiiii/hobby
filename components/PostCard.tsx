import { Post } from "@/types/domain";
import Image from "next/image";


interface PostCardProps {
    post: Post
}   

export default function PostCard({ post }: PostCardProps) {
    return (
        <div>
            <Image src={post.thumbnail} 
            alt={post.title} 
            width={100} 
            height={100} 
            className="w-full h-full object-cover"
            />
        </div>
    )
}   