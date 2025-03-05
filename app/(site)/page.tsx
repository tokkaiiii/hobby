import Image from "next/image";
import PagePadding from "@/components/PagePadding";
import Category from "@/components/Category";
import PostCarousel from "@/components/PostCarousel";
import { getPosts, getPostById } from "@/api/post";
export default async function Home() {
  const { posts } = await getPosts();
  return (
    <PagePadding>
      <div className="min-h-[600px]">
        <div className="mt-9"></div>
        <Category/>
        <div className="mt-12">
          <PostCarousel 
          title="티셔츠"
          posts={posts}
          />
        </div>
      </div>
    </PagePadding>
  );
}
