import { Post } from "@/types/domain";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import PostCard from "./PostCard";
interface PostCarouselProps {
  title: string;
  subtitle?: string;
  Thumbnail?: React.ReactNode;
  posts: Post[];
}

export default function PostCarousel({
  title,
  subtitle,
  Thumbnail,
  posts,
}: PostCarouselProps) {
  return (
    <div className="w-full">
      <Carousel>
        <div className="flex flex-row justify-between items-end my-2">
          <article className="flex flex-row gap-3">
            {Thumbnail}
            <div className="flex flex-col justify-center">
              <div>
                {subtitle && <div className="text-neutral-500">{subtitle}</div>}
              </div>
              <div className="text-[34px] font-bold leading-[34px]">
                {title}
              </div>
            </div>
          </article>
          <div className="relative left-[-45px]">
            <div className="absolute bottom-[20px]">
              <CarouselPrevious className="right-2" />
              <CarouselNext className="left-2" />
            </div>
          </div>
        </div>
        <CarouselContent>
          {posts.map((post) => (
            <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3">
              <PostCard post={post} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
