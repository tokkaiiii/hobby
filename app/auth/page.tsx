"use client";
 
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Card, CardContent } from "@/components/ui/card";
import PagePadding from "@/components/PagePadding";
 
const SignIn = () => {
  const supabaseClient = useSupabaseClient();
 
  return (
    <PagePadding>
      <div className="flex items-center justify-center mt-9">
        <Card className="w-full max-w-md">
          <CardContent className="p-6">
          <Auth
            supabaseClient={supabaseClient}
            appearance={{
              theme: ThemeSupa,
              style: {
                container: { 
                  maxWidth: "100%",
                  width: "100%" 
                },
                button: {
                  backgroundColor: "hsl(var(--primary))",
                  color: "hsl(var(--primary-foreground))",
                  borderRadius: "0.5rem",
                  padding: "0.5rem 1rem",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                },
                input: {
                  backgroundColor: "hsl(var(--background))",
                  borderColor: "hsl(var(--border))",
                  borderRadius: "0.5rem",
                  padding: "0.5rem 0.75rem",
                },
                label: {
                  color: "hsl(var(--foreground))",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                },
                message: {
                  color: "hsl(var(--destructive))",
                  fontSize: "0.875rem",
                },
                divider: {
                  color: "hsl(var(--border))",
                },
              },
            }}
            providers={["kakao"]}
            localization={{
              variables: {
                sign_in: {
                  email_label: "이메일",
                  password_label: "비밀번호",
                  button_label: "로그인",
                  loading_button_label: "로그인 중...",
                  link_text: "비밀번호를 잊으셨나요?",
                },
                sign_up: {
                  email_label: "이메일",
                  password_label: "비밀번호",
                  button_label: "회원가입",
                  loading_button_label: "회원가입 중...",
                  link_text: "이미 계정이 있으신가요?",
                },
              },
            }}
          />
        </CardContent>
      </Card>
    </div>
    </PagePadding>
  );
};
 
export default SignIn;