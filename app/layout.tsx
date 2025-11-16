import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { David_Libre, Roboto } from "next/font/google";

// Configure the fonts
const davidLibre = David_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-david-libre", // This creates a CSS variable
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto", // This creates another CSS variable
});

export const metadata: Metadata = {
  title: "Shira's App",
  description:
    "A starter kit for wiritng code in the Digital Product Jam course.",
  icons: {
    icon: "/icons/shira website icon.png", // Main browser favicon
    apple: "/icons/icon-180.png", // Apple touch icon
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${davidLibre.variable} ${roboto.variable}`}>
      <body>
        {children}
        <Script src="https://accounts.google.com/gsi/client" async />
      </body>
    </html>
  );
}
