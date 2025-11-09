import "@/styles/global.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "@/lib/components/Navbar";
import Footer from "@/lib/components/Footer";

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
    <html>
      <head>
        {/* The <head> is now managed by Next.js through the metadata object */}
        <script src="https://accounts.google.com/gsi/client" async></script>
      </head>
      <body>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
