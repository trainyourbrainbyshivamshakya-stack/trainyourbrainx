import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "TrainYourBrain — TUB",
};

export default function TrainYourBrainPage() {
  return (
    <div className={styles.canvas}>
      <div className={styles.header}>
        <Link href="/" className={styles.backLink}>
          ← Back to home
        </Link>
        <h1 className={styles.title}>TrainYourBrain</h1>
        <p className={styles.subtitle}>
          The full picture — every structure, every pattern.
        </p>
      </div>
    </div>
  );
}
