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
  title: "VELOCITY CRM | Cyber-Luxe Operations",
  description: "Next-gen CRM for high-velocity teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sora.variable}>
      <body className="bg-background text-white antialiased selection:bg-velocity-purple/30 font-sora">
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
