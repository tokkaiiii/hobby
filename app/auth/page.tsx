"use client";
 
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
 
const SignIn = () => {
  const supabaseClient = useSupabaseClient();
 
  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <Auth
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          style: {
            container: { 
              maxWidth: "400px",
              width: "100%" 
            },
          },
        }}
        providers={["kakao"]}
        localization={{
          variables: {
            sign_in: {
              email_label: "이메일",
              password_label: "비밀번호",
            },
          },
        }}
      />
    </div>
  );
};
 
export default SignIn;