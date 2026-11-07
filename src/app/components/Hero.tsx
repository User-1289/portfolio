import { ArrowDown, ArrowUpRight, FileText, Github, Mail } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero({ email, github }: { email: string; github: string }) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.topline}>
        <p className={styles.role}>Product engineer</p>
        <p className={styles.availability}><span aria-hidden="true" />Based in India · Open to remote roles &amp; relocation</p>
      </div>
      <h1 id="hero-title">Armaan Zeyad</h1>
      <p className={styles.lead}>I build products and help them grow.</p>
      <p className={styles.proof}>At Flamingo Cards, I helped grow MRR by 100% in 7 months.</p>
      <div className={styles.bottomline}>
        <div className={styles.actions}>
          <a className="button primary" href="/resume"><FileText size={16} aria-hidden="true" /> Resume</a>
          <a className="button" href={`mailto:${email}`}><Mail size={16} aria-hidden="true" /> Email</a>
          <a className="button social" href={github}><Github size={16} aria-hidden="true" /> GitHub <ArrowUpRight size={13} aria-hidden="true" /></a>
        </div>
        <a className={styles.workLink} href="#work">Explore my work <ArrowDown size={15} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
