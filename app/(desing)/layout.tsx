import type { ReactNode } from "react";
import DesignNavbar from "@/lib/components/DesignNavbar";
import styles from './layout.module.css';


export const metadata = {
  title: "Design Studio - Shira's App",
  description: "The design studio section.",
};

export default function DesignLayout({ children }: { children: ReactNode }) {
  return (
    // By combining the classNames, we give Next.js the strongest possible instruction
    // to apply these fonts for this layout and its children during navigation.
    <div>
      <DesignNavbar />
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}
