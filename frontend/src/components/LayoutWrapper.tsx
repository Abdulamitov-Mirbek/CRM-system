'use client';

import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  
  return (
    <main className={cn(
      "min-h-screen transition-all duration-300",
      session ? "pl-64 pt-20" : ""
    )}>
      <div className={cn(session ? "p-8" : "")}>
        {children}
      </div>
    </main>
  );
}
