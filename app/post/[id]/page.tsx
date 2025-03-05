import PagePadding from "@/components/PagePadding";
import { getPostById } from "@/api/post";
import { getImageUrl } from "@/api/storage";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";


export default async function PostPage({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;
    const posts = await getPostById(id);
    
    if (!posts || posts.length === 0) {
        notFound();
    }
    
    const post = posts[0];
    const imageUrl = getImageUrl(`${post.category}/${post.thumbnail}`);

    return (
        <PagePadding>
            <div >
                <div className="mt-9">
                    <Link href="/">
                        <div 
                        className="h-[38px] w-fit min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer"
                        >
                            <ArrowLeft size={16} />
                            돌아가기
                        </div>
                    </Link>
                </div>
                
                <article className="space-y-8 mt-12">
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                        <Suspense fallback={<div className="w-full h-full bg-gray-200 animate-pulse" />}>
                            <Image
                                src={imageUrl}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </Suspense>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                                {post.category}
                            </span>
                            <time className="text-sm text-muted-foreground">
                                {post.created_at && format(new Date(post.created_at), 'yyyy년 MM월 dd일')}
                            </time>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
                        <p className="text-xl text-muted-foreground">{post.subtitle}</p>
                        
                        <div className="prose prose-neutral dark:prose-invert max-w-none">
                            {post.description}
                        </div>
                    </div>
                </article>
            </div>
        </PagePadding>
    );
}