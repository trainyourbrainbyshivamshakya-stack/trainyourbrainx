import { Nunito, Sour_Gummy } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});
const sourGummy = Sour_Gummy({
  variable: "--font-sour-gummy",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
export const metadata = {
  title: "TUB — Master DSA with Deep Clarity",
  description:
    "The clearest way to learn Data Structures and Algorithms. Two modes: read deeply, or train your brain visually.",
  icons: {
    icon: "/white_tab_logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.variable} ${sourGummy.variable}`}>
      <body>{children}</body>
    </html>
  );
}