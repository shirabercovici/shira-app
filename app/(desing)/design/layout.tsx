import type { ReactNode } from "react";
import DesignNavbar from "@/lib/components/DesignNavbar";
import styles from './layout.module.css';

export const metadata = {
  title: "Design Studio - Shira's App",
  description: "The design studio section.",
};

export default function DesignLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <DesignNavbar />
      <main className={styles.mainContent}>
        {children}
      </main>
    </>
  );
}
