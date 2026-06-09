"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brain } from "lucide-react";
import { cn } from "@/lib/utils";
import styles from "./NavBar.module.css";
export default function NavBar() {
  const pathname = usePathname();
  const isMapPage = pathname === "/trainyourbrain";
  const isDarkPage =
    isMapPage ||
    (pathname?.includes("/learn/") && pathname?.endsWith("/train"));

  return (
    <header className={cn(styles.navbar, isDarkPage && styles.navbarDark)}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logoLink}>
          <img
            // src="/White_Logo.png"
            src="/web_whitelogo_blackBC.svg"
            alt="TrainYourBrain Logo"
            className={styles.logoImg}
          />
        </Link>

        <div className={cn(styles.links, isDarkPage && styles.linksDark)}>
          <Link href="/learn" className={styles.link}>
            Topics
          </Link>
          <Link href="/problems" className={styles.link}>
            Problems
          </Link>
          <Link href="/about" className={styles.link}>
            About
          </Link>
        </div>

        <Link
          href="/trainyourbrain"
          className={cn(
            styles.modeToggle,
            isMapPage && styles.modeToggleActive,
          )}
        >
          <Brain className={styles.icon} />
          <span>TrainYourBrain</span>
        </Link>
      </nav>
    </header>
  );
}
