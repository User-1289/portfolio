import styles from "./Impact.module.css";

export type ImpactVariant = "cards" | "feature" | "rows";

// User-reported results: PROFILE.md and
// research/flamingo_case_study_source_notes_2026-10-12.md in the parent workspace.
// Trial starts are not paid conversions; app audience is not personal acquisition.
const outcomes = [
  {
    category: "Revenue growth",
    value: "2×",
    title: "Monthly recurring revenue",
    description: "Helped double MRR in seven months through product, pricing, and paywall experiments.",
    context: "Flamingo Cards · Product Lead",
  },
  {
    category: "Experimentation",
    value: "+75%",
    title: "More free-trial starts",
    description: "Increased trial starts through paywall improvements and experiments.",
    context: "Flamingo Cards · Product experimentation",
  },
  {
    category: "Production engineering",
    value: "100k+",
    title: "Users on Flamingo Cards",
    description: "Built and shipped mobile features, with ownership from development through deployment.",
    context: "Flamingo Cards · Software Engineer",
  },
  {
    category: "Performance",
    value: "3s → 200ms",
    title: "Faster app startup",
    description: "Parallelized startup tasks in a React Native app serving 50,000 users.",
    context: "Freelance · Mobile Developer",
  },
];

export default function Impact({ variant = "cards" }: { variant?: ImpactVariant }) {
  return (
    <section className={`${styles.impact} ${styles[variant]}`} aria-label="Selected impact and production experience">
      <div className={styles.heading}>
        <h2>Impact at a glance<span>.</span></h2>
        <p>Growth, experiments, and engineering in production.</p>
      </div>
      <div className={styles.grid}>
        {outcomes.map((outcome, index) => (
          <article className={styles.item} key={outcome.category}>
            <div className={styles.category}><span className={styles.index}>0{index + 1}</span>{outcome.category}</div>
            <p className={`${styles.value} ${index === 3 ? styles.timing : ""}`}>{outcome.value}</p>
            <div className={styles.copy}>
              <h3>{outcome.title}</h3>
              <p>{outcome.description}</p>
            </div>
            <p className={styles.context}>{outcome.context}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
