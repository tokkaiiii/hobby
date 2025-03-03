import supabase from "./supabase";
export const getPosts = async () => {
    const { data, error } = await supabase
        .from("post")
        .select("*")
        .order('id', { ascending: false });
    
    if (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }

    if (!data || data.length === 0) {
        console.log('No posts found');
    }
    
    return data || [];
}

export const getPostById = async (id: number) => {
    const { data, error } = await supabase.from("post").select("*").eq("id", id);
    if (error) {
        throw error;
    }
    return data;
}