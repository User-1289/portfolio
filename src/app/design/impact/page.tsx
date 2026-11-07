import type { Metadata } from "next";
import Link from "next/link";
import Impact, { type ImpactVariant } from "../../components/Impact";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Impact section — design options",
  robots: { index: false, follow: false },
};

const options: { id: ImpactVariant; label: string; title: string; note: string }[] = [
  { id: "cards", label: "A", title: "Context cards", note: "My pick. Four clear takeaways, each with the outcome, your contribution, and the product behind it." },
  { id: "feature", label: "B", title: "Revenue first", note: "Makes the strongest business result the focal point, with experimentation, scale, and performance supporting it." },
  { id: "rows", label: "C", title: "Editorial list", note: "A quieter, more compact layout. Each number reads alongside a short explanation." },
];

export default function ImpactDesigns() {
  return (
    <main className={`portfolio wrap ${styles.page}`}>
      <header className={styles.header}>
        <Link href="/">← Back to portfolio</Link>
        <span>Design review / Impact section</span>
      </header>
      <div className={styles.intro}>
        <p className="eyebrow">Three directions</p>
        <h1>Make the numbers<br />mean something<span>.</span></h1>
        <p>The same four facts, with enough context to understand what changed and what I contributed.</p>
        <nav aria-label="Design options">{options.map(option => <a key={option.id} href={`#${option.id}`}>{option.label}. {option.title} <span>↓</span></a>)}</nav>
      </div>
      {options.map(option => (
        <section id={option.id} className={styles.option} key={option.id} aria-labelledby={`${option.id}-title`}>
          <div className={styles.caption}>
            <span className={styles.badge}>{option.label}</span>
            <div><h2 id={`${option.id}-title`}>{option.title}</h2><p>{option.note}</p></div>
          </div>
          <Impact variant={option.id} />
        </section>
      ))}
      <div className={styles.footer}><Link href="/">See option A on the portfolio ↗</Link></div>
    </main>
  );
}
