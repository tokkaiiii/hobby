'use client'

import { useEffect, useRef, useState } from 'react'
import { Post } from '@/types/domain'
import PostCard from './PostCard'
import { getImageUrl } from '@/api/storage'
import { getPosts } from '@/api/post'
import { useInView } from 'react-intersection-observer'
import { Skeleton } from '@/components/ui/skeleton'

export default function InfinitePostList() {
    const [posts, setPosts] = useState<Post[]>([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const { ref, inView } = useInView()

    const loadMorePosts = async () => {
        if (isLoading || !hasMore) return
        
        setIsLoading(true)
        try {
            const { posts: newPosts, hasMore: more } = await getPosts(page + 1)
            setPosts(prev => [...prev, ...newPosts])
            setHasMore(more)
            setPage(prev => prev + 1)
        } catch (error) {
            console.error('Error loading more posts:', error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        loadMorePosts();
    }, [loadMorePosts]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => {
                const imageUrl = getImageUrl(`${post.category}/${post.thumbnail}`)
                return (
                    <PostCard key={post.id} post={post} imageUrl={imageUrl} />
                )
            })}
            
            {/* Loading indicator */}
            <div ref={ref} className="col-span-full flex justify-center py-4">
                {isLoading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="space-y-3">
                                <Skeleton className="h-[136px] w-full rounded-lg" />
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-3/4" />
                                    <Skeleton className="h-4 w-1/2" />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
} 