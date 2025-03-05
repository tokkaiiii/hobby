import PagePadding from "@/components/PagePadding"
import InfinitePostList from "@/components/InfinitePostList"

export default function PostPage() {
    return (
        <PagePadding>
            <div className="mt-9">
                <h1 className="text-[34px] font-bold leading-[34px] mb-8">전체 게시물</h1>
                <InfinitePostList />
            </div>
        </PagePadding>
    )
}