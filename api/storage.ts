import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase environment variables");
}

// 인증된 클라이언트 생성
export const supabaseStorage = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        persistSession: true,
        autoRefreshToken: true,
    },
});

export const getImageUrl = (path: string) => {
    const { data } = supabaseStorage.storage.from(process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET!).getPublicUrl(path);
    return data.publicUrl;
}

export const uploadImage = async (path: string, file: File) => {
    const session = await supabaseStorage.auth.getSession();
    
    if (!session.data.session) {
        throw new Error('인증이 필요합니다');
    }

    const { data, error } = await supabaseStorage.storage
        .from(process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET!)
        .upload(path, file, {
            cacheControl: '3600',
            upsert: false
        });
    
    if (error) {
        console.error('Storage error:', error);
        throw new Error(`이미지 업로드 실패: ${error.message}`);
    }
    
    return data;
}

export const deleteImage = async (path: string) => {
    const { data, error } = await supabaseStorage.storage.from(process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET!).remove([path]);
    return data;
}


