import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { SideNavBar } from "@/components/SideNavBar";
import { TopNavBar } from "@/components/TopNavBar";

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
        <SideNavBar />
        <TopNavBar />
        <main className="pl-64 pt-20 min-h-screen">
          <div className="p-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
