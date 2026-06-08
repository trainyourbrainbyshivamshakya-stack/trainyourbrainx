import { notFound } from 'next/navigation';
import { getTopic } from '@/lib/topics';
import styles from './page.module.css';

export default async function ShapePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = getTopic(slug);

  if (!topic) notFound();

  return (
    <main className={styles.main}>

      {/* ── Shape Header ── */}
      <section className={styles.header}>
        <div className={styles.iconWrap} style={{ '--accent': topic.color } as React.CSSProperties}>
          <span className={styles.icon}>{topic.icon}</span>
        </div>
        <h1 className={styles.title} style={{ color: topic.color }}>
          {topic.name}
        </h1>
        <p className={styles.blurb}>{topic.blurb}</p>
      </section>

      {/* ── Problems Section ── */}
      <section className={styles.problemsSection}>
        <h2 className={styles.sectionTitle}>Problems</h2>
        <p className={styles.comingSoon}>Problems coming soon.</p>
      </section>

    </main>
  );
}