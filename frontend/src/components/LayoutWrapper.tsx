"use client";

import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const isPublicPortal =
    pathname?.startsWith("/client-booking") || pathname?.startsWith("/book");

  return (
    <main
      className={cn(
        "min-h-screen transition-all duration-300",
        session && !isPublicPortal ? "pl-64 pt-20" : "",
      )}
    >
      <div className={cn(session && !isPublicPortal ? "p-8" : "")}>
        {children}
      </div>
    </main>
  );
}
