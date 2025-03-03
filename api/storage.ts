import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase environment variables");
}

const supabaseStorage = createClient(supabaseUrl, supabaseAnonKey);

export const getImageUrl = (path: string) => {
    const { data } = supabaseStorage.storage.from(process.env.NEXT_PUBLIC_STORAGE_BUCKET!).getPublicUrl(path);
    return data.publicUrl;
}

export const uploadImage = async (path: string, file: File) => {
    const { data, error } = await supabaseStorage.storage.from(process.env.NEXT_PUBLIC_STORAGE_BUCKET!).upload(path, file);
    return data;
}

export const deleteImage = async (path: string) => {
    const { data, error } = await supabaseStorage.storage.from(process.env.NEXT_PUBLIC_STORAGE_BUCKET!).remove([path]);
    return data;
}


