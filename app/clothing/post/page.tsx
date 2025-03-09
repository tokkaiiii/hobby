import PagePadding from "@/components/PagePadding";
import { PostForm } from "./components/post-form";

export default function PostPage() {
    return (
        <PagePadding>
            <div className="max-w-3xl mx-auto py-10">
                <h1 className="text-2xl font-semibold mb-6">새 상품 등록</h1>
                <PostForm />
            </div>
        </PagePadding>
    )
}   