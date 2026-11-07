import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUp, ArrowUpRight, ExternalLink } from "lucide-react";
import ProductDemo from "./components/ProductDemo";
import AiWork from "./components/AiWork";
import Impact from "./components/Impact";
import Hero from "./components/Hero";

const email = "armaanzeyad@gmail.com";
const github = "https://github.com/User-1289";
const flamingo = "https://apps.apple.com/us/app/flamingo-cards-couple-games/id1537890432";
const honest = "https://apps.apple.com/us/app/honest-questions-for-couples/id6745623597";
const flamingoCaseStudy = "https://petite-tarp-dcf.notion.site/How-I-helped-increase-MRR-by-100-at-Flamingo-Cards-cc50f457a20f83fcbdb381ccf38c6ea3";

const jobs = [
  ["Mar – Oct 2026", "Product Lead", "Flamingo Cards", "Led a small team running paywall, pricing, and onboarding experiments."],
  ["Jan – Mar 2026", "Software Engineer", "Flamingo Cards", "Shipped mobile features and built the analytics tools behind our experiments."],
  ["Oct – Dec 2025", "Mobile Developer", "Freelance", "Parallelized startup tasks in a React Native app serving 50k users."],
  ["Nov 2024 – Jun 2025", "Software Engineering Intern", "Vispero", "Built a React Native library for JAWS Kiosk on Android and shipped two internal apps on AWS ECS."],
  ["Jul – Aug 2024", "Software Engineer", "Freelance", "Designed the APIs and built a chatbot SaaS that answers questions from a business’s own content."],
];

function Monogram() { return <span className="monogram" aria-hidden="true">AZ<span>.</span></span>; }

function StoreLink({ href, name }: { href: string; name: string }) {
  return <a className="text-link" href={href} aria-label={`View ${name} on the App Store`}>App Store <ArrowUpRight size={15} aria-hidden="true" /></a>;
}

function Phone({ product, alt }: { product: string; alt: string }) {
  return <div className={`stage stage-${product}`}><div className="orbit orbit-one" /><div className="orbit orbit-two" />
    <div className="phone"><Image src={`/work/${product}.webp`} alt={alt} width={300} height={650} sizes="220px" unoptimized /></div>
  </div>;
}

export default function Home() {
  return (
    <div className="portfolio" id="top">
      <a className="skip" href="#main">Skip to content</a>
      <header className="site-header wrap">
        <a className="brand" href="#top" aria-label="Armaan Zeyad, home"><Monogram /><span className="brand-title">Armaan Zeyad</span></a>
        <nav aria-label="Main navigation"><a href="#case-study">Case study</a><a href="#work">Work</a><a href="#experience">Experience</a><a href="#contact">Contact <ArrowDown size={13} aria-hidden="true" /></a></nav>
      </header>
      <main id="main" className="wrap">
        <Hero email={email} github={github} />
        <Impact />
        <article className="study section" id="case-study" aria-labelledby="study-title">
          <p className="eyebrow">Case study <span>/</span> Flamingo Cards</p>
          <h2 id="study-title">How I helped increase MRR by 100% at Flamingo Cards<span>.</span></h2>
          <div className="study-content">
            <p>I started in engineering and moved into leading product, staying hands-on with a lean team. Over seven months, I helped increase MRR by 100% through paywall testing, product testing, funnel improvements, and pricing optimization.</p>
            <h3>What I owned</h3>
            <p>I took experiments from hypothesis through implementation, deployment, analytics, and interpretation. I shipped changes using React Native, Node.js, and Firebase, and coordinated engineering, design, and testing.</p>
            <h3>What we tested</h3>
            <p>Flamingo often served an immediate occasion, like a date night. My interpretation was that users wanted to unlock the experience quickly. That shaped our tests of paywall formats, product demonstrations, trial messaging, and weekly pricing.</p>
            <dl className="experiments">
              <div><dt>Hard versus dismissible paywall</dt><dd>&gt;50% more trial starts</dd></div>
              <div><dt>Product video on the paywall</dt><dd>&gt;25% higher conversion</dd></div>
              <div><dt>Video → reassurance → three-day trial</dt><dd>~20% more trial starts</dd></div>
              <div><dt>Weekly pricing experiments</dt><dd>&gt;25% higher lifetime value</dd></div>
            </dl>
            <p>These are separate experiment results. They do not add up to, or individually explain, the overall MRR increase.</p>
            <h3>What the growth didn’t solve</h3>
            <p>Reported day-30 product retention was below 1%. More trial starts did not, by themselves, establish better subscriber retention. A successful date-night session did not necessarily give people a reason to return.</p>
            <p className="lesson">My takeaway: the first experience after the paywall needed to deliver on its promise quickly. That was a product lesson, not a separately measured retention improvement.</p>
            <a className="text-link study-source" href={flamingoCaseStudy}>Read the full case study on Notion <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </article>
        <section id="work" className="section" aria-labelledby="work-title">
          <div className="section-title"><h2 id="work-title">Selected work<span>.</span></h2></div>
          <div className="work-list">
            <article className="project">
              <Phone product="flamingo" alt="The Flamingo Cards iPhone app" />
              <div className="project-copy"><p className="eyebrow">Consumer subscriptions</p><h3>Flamingo Cards</h3>
                <p>I moved from engineering into leading product, staying hands-on with a lean team. I took paywall, trial messaging, onboarding, and pricing experiments from hypothesis through implementation, deployment, and analysis.</p>
                <p className="result">Helped increase MRR by 100% over seven months.</p>
                <div className="project-actions"><a className="case-link" href="#case-study">Read case study <ArrowRight size={15} /></a><StoreLink href={flamingo} name="Flamingo Cards" /><ProductDemo name="Flamingo Cards" src="/work/flamingo.mp4" description="A walkthrough of the Flamingo Cards experience." /></div>
              </div>
            </article>
            <article className="project">
              <Phone product="honest" alt="The Honest iPhone app for couples" />
              <div className="project-copy"><p className="eyebrow">Mobile product engineering</p><h3>Honest</h3>
                <p>I rebuilt this couples app around things two people could do together. Partners could pair their phones, play games, and keep a shared prompt on their home screen with a widget.</p>
                <p className="result">Shipped the new version in about a week.</p>
                <div className="project-actions"><StoreLink href={honest} name="Honest" /><ProductDemo name="Honest" src="/work/honest.mp4" description="Setting up a couples widget on the iPhone home screen." /></div>
              </div>
            </article>
            <AiWork />
          </div>
        </section>
        <section id="experience" className="section" aria-labelledby="experience-title">
          <div className="section-title"><h2 id="experience-title">Experience<span>.</span></h2></div>
          <ol className="timeline">{jobs.map(([dates, role, company, summary]) => <li key={dates}><span className="dates">{dates}</span><div><h3>{role} <span>· {company}</span></h3><p>{summary}</p></div></li>)}</ol>
          <div className="stack"><h3>Stack</h3><p>TypeScript · React Native · Next.js · Node.js · Firebase · BigQuery · AWS · Docker</p></div>
        </section>
      </main>
      <footer id="contact" className="wrap"><div className="footer-main"><div><h2>Let’s talk<span>.</span></h2><a className="email-link" href={`mailto:${email}`}>{email} <ArrowUpRight size={20} /></a></div>
        <a className="back" href="#top">Back to top <ArrowUp size={15} /></a></div>
        <div className="footer-base"><span>Armaan Zeyad</span><a href={github}>GitHub <ExternalLink size={12} /></a></div>
      </footer>
    </div>
  );
}
