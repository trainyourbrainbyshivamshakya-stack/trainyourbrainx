import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@/components/layout/NavBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TUB — Master DSA with Deep Clarity",
  description:
    "The clearest way to learn Data Structures and Algorithms. Two modes: read deeply, or train your brain visually.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}