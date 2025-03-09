import { getPosts } from "@/api/post";
import { getImageUrl } from "@/api/storage";
import PagePadding from "@/components/PagePadding";
import PostCard from "@/components/PostCard";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { cn } from "@/lib/utils";
function PostCardSkeleton() {
  return (
    <article className="h-[240px]">
      <section className="relative h-[136px]">
        <Skeleton className="w-full h-full" />
      </section>
      <section className="mt-2 space-y-2">
        <Skeleton className="w-3/4 h-5" />
        <Skeleton className="w-1/2 h-4" />
      </section>
    </article>
  );
}

export default async function ClothingPage() {
  const posts = await getPosts();
  return (
    <PagePadding>
      <div className="mt-9"></div>
      <Link href="/clothing/post">
        <ul className="max-w-full overflow-x-auto flex flex-row gap-4">
          <li
            className={cn(
              "h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer"
            )}
          >
            글쓰기
          </li>
        </ul>
      </Link>
      <div className="mt-12"></div>
      <section className="grid grid-cols-3 gap-6 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {posts.posts.map((post) => {
          const imageUrl = getImageUrl(`${post.category}/${post.thumbnail}`);
          return (
            <Suspense key={post.id} fallback={<PostCardSkeleton />}>
              <PostCard post={post} imageUrl={imageUrl} />
            </Suspense>
          );
        })}
      </section>
    </PagePadding>
  );
}
