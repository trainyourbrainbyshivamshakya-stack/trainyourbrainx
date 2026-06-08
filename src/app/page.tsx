import Link from 'next/link';
import { topics } from '@/lib/topics';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Master DSA with deep clarity.</h1>
        <p className={styles.tagline}>
          Six core shapes. One way of thinking. Pick a topic to begin.
        </p>
      </section>

      <section className={styles.grid}>
        {topics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/learn/${topic.slug}`}
            className={styles.card}
            style={{ '--accent': topic.color } as React.CSSProperties}
          >
            <div className={styles.cardIcon} aria-hidden="true">
              {topic.icon}
            </div>
            <h2 className={styles.cardName}>{topic.name}</h2>
            <p className={styles.cardBlurb}>{topic.blurb}</p>
            <span className={styles.cardArrow}>→</span>
          </Link>
        ))}
      </section>
    </main>
  );
}