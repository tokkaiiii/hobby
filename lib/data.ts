import { Post } from "@/types/domain"

export const categories = [
    {
        label: "uniqlo",
        src: "/img/uniqlo01.jpg",
    },
    
]

export const posts: Post[] = [
    {
        id: 1,
        title: "우연히 구매한 티셔츠",
        subtitle: "고양이가 귀여워서 구매했습니다.",
        thumbnail: "/img/uniqlo01.jpg",
        category: "uniqlo",
        createdAt: "2025-03-03",
        updatedAt: "2025-03-03",
    }
]