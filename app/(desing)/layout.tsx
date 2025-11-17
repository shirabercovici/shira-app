import type { ReactNode } from "react";
import DesignNavbar from "@/lib/components/DesignNavbar";
import styles from './layout.module.css';
import localFont from "next/font/local";


// Configure Masada (Defining Regular and Bold)
const masada = localFont({
  src: [
    {
      path: '../fonts/Masada-Book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Masada-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-masada',
});

// Configure EditorSans (Defining Normal and Medium)
const editorSans = localFont({
  src: [
    {
      path: '../fonts/EditorSans-Normal.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/EditorSans-Medium.otf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-editor-sans',
});

export const metadata = {
  title: "Design Studio - Shira's App",
  description: "The design studio section.",
};

export default function DesignLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${masada.variable} ${editorSans.variable} ${editorSans.className}`}>
      <DesignNavbar />
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}
