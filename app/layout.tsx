import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";


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
    <html lang="en">
      <body>
        {children}
        <Script src="https://accounts.google.com/gsi/client" async />
      </body>
    </html>
  );
}
