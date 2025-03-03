export type Post = {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    category: string;
    thumbnail: string | null;
    created_at: string | null;
    updated_at: string | null;
}