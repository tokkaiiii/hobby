import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/Sidebar";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import SupabaseProvider from "@/providers/supabase-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "취미잡다로그",
  description: "아무거나 올리면 취향이 보이지 않을까요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {process.env.PRIVATE_GA_MEASUREMENT_ID && (
          <GoogleAnalytics 
            measurementId={process.env.PRIVATE_GA_MEASUREMENT_ID}
          />
        )}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SupabaseProvider>
            <Sidebar>
              {children}
            </Sidebar>
          </SupabaseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
