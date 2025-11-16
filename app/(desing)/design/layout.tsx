import type { ReactNode } from "react";
import DesignNavbar from "@/lib/components/DesignNavbar";

export const metadata = {
  title: "Design Studio - Shira's App",
  description: "The design studio section.",
};

export default function DesignLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <DesignNavbar />
      <main>
        {/* This is a completely different layout for /design */}
        {children}
      </main>
    </>
  );
}
