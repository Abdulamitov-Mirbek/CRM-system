import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { SideNavBar } from "@/components/SideNavBar";
import { TopNavBar } from "@/components/TopNavBar";
import { Providers } from "@/components/Providers";
import { LayoutWrapper } from "@/components/LayoutWrapper";

const sora = Sora({ 
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "DAAMDA CRM",
  description: "CRM система автоматизации DAAMDA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={sora.variable} suppressHydrationWarning>
      <body className="bg-background text-white antialiased selection:bg-crm-primary/30 font-sora" suppressHydrationWarning>
        <Providers>
          <SideNavBar />
          <TopNavBar />
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
