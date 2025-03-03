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

interface PostPageProps {
    params: {
        id: string;
    };
}

export default async function PostPage({ params }: PostPageProps) {
    const posts = await getPostById(parseInt(params.id));
    
    if (!posts || posts.length === 0) {
        notFound();
    }
    
    const post = posts[0];
    const imageUrl = getImageUrl(`${post.category}/01.jpg`);

    return (
        <PagePadding>
            <div className="max-w-4xl mx-auto py-8">
                <div className="mb-6">
                    <Link href="/">
                        <Button variant="ghost" className="gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            돌아가기
                        </Button>
                    </Link>
                </div>
                
                <article className="space-y-8">
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