import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ProductDemo from "./ProductDemo";

export default function AiWork() {
  return (
    <article className="project">
      <div className="stage stage-flow"><Image className="flow-screen" src="/work/local-flow.webp" alt="Recorded dictations in Local Flow’s History view" width={960} height={600} unoptimized /></div>
      <div className="project-copy"><p className="eyebrow">On-device AI</p><h3>Local Flow</h3>
        <p>I built a dictation app for people who want to keep their speech on their own computer. A streaming speech model transcribes the audio, a second local model cleans up corrections, and the app inserts the result where you’re typing.</p>
        <p className="result">From microphone to finished text, on device.</p>
        <div className="project-actions"><a className="text-link" href="https://www.getlocalflow.app/">Product site <ArrowUpRight size={15} /></a><ProductDemo name="Local Flow" src="/work/local-flow.mp4" description="Two recordings run through the on-device models, followed by the app’s History screen." /></div>
      </div>
    </article>
  );
}
