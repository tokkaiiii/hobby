'use client';
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useSession } from "@supabase/auth-helpers-react";
import Link from "next/link";
export default function UserIcon() {
    const supabase = useSupabaseClient();
    const session = useSession();



    const handleSignOut = async () => {
        await supabase.auth.signOut();
    };  


  return (
    <div className="flex items-center gap-2">
        <article>
            <p>{session?.user?.email}</p>
        </article>
        {session ? (
            <button onClick={handleSignOut}>Sign Out</button>
        ) : (
            <article className="flex items-center gap-2">
                <Link href="/auth">로그인</Link>
            </article>
        )}
    </div>
  );
}
    