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
        title: "고양이 티셔츠 추천",
        subtitle: "고양이 티셔츠 추천 포스트를 확인해보세요.",
        thumbnail: "/img/uniqlo01.jpg",
        category: "uniqlo",
        createdAt: "2025-03-03",
        updatedAt: "2025-03-03",
    }
]