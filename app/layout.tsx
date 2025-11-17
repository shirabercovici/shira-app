import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./styles/global.css";
import localFont from "next/font/local";


// Configure Masada (Defining Regular and Bold)
const masada = localFont({
  src: [
    {
      path: './fonts/Masada-Book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Masada-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-masada',
});

// Configure EditorSans with all available weights
const editorSans = localFont({
  src: [
    {
      path: './fonts/EditorSans-Light.otf',
      weight: '300', // Light is usually 300
      style: 'normal',
    },
    {
      path: './fonts/EditorSans-Book.otf',
      weight: '350', // "Book" is often between Light and Normal. 
      style: 'normal', // You can also map this to '400' if you prefer this over "Normal"
    },
    {
      path: './fonts/EditorSans-Normal.otf',
      weight: '400', // Standard "Regular" weight
      style: 'normal',
    },
    {
      path: './fonts/EditorSans-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/EditorSans-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-editor-sans',
});


export const metadata: Metadata = {
  title: "Shira's App",
  description:
    "A web app that was created in Ex2 in the Digital Product Jam course.",
  icons: {
    icon: "/icons/app-logo.png", // Main browser favicon
    apple: "/icons/icon-180.png", // Apple touch icon
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${masada.variable} ${editorSans.variable}`}>
      {/* By default, the entire app will use editorSans, applied via CSS. */}
      <body className={editorSans.className}>
        {children}
        <Script src="https://accounts.google.com/gsi/client" async />
      </body>
    </html>
  );
}
