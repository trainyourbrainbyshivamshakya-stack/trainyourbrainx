import Link from 'next/link';
import { topics } from '@/lib/topics';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.main}>

      {/* ── Hero Section ── */}
      <section className={styles.hero}>
        <p className={styles.heroEyebrow}>Train Your Brain</p>
        <h1 className={styles.heroTitle}>
          Stop Memorizing.<br />Start Thinking.
        </h1>
        <p className={styles.heroSubtitle}>
          DSA the way your brain actually works — step by step, no gaps, no magic.
        </p>
        <div className={styles.heroPills}>
          <span className={styles.pill}>Think first. Code second.</span>
          <span className={styles.pill}>Built for real learners.</span>
          <span className={styles.pill}>From confusion to clarity.</span>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className={styles.divider}>
        <span className={styles.dividerText}>Pick your input shape</span>
      </div>

      {/* ── 6 Shape Cards ── */}
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