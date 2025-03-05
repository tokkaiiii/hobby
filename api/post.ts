import supabase from "./supabase";

export const getPosts = async (page = 1, limit = 12) => {
    const start = (page - 1) * limit;
    const end = start + limit - 1;
    
    const { data, error, count } = await supabase
        .from("post")
        .select("*", { count: 'exact' })
        .order('id', { ascending: false })
        .range(start, end);
    
    if (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }

    if (!data || data.length === 0) {
        console.log('No posts found');
    }
    
    return {
        posts: data || [],
        total: count || 0,
        hasMore: (count || 0) > end + 1
    };
}

export const getPostById = async (id: number) => {
    const { data, error } = await supabase.from("post").select("*").eq("id", id);
    if (error) {
        throw error;
    }
    return data;
}