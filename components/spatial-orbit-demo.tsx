"use client";
import { sitePath } from "@/lib/i18n";

import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";

// Three.js creates a LoadingManager as soon as its module is evaluated. Keeping
// this import browser-only avoids evaluating WebGL code in the edge SSR worker.
const GlassOrbitCanvas = dynamic(
  () => import("@/components/glass-orbit-canvas").then((module) => module.GlassOrbitCanvas),
  { ssr: false }
);

export function SpatialOrbitDemo() {
  const stage = useRef<HTMLElement>(null);
  const reduced = Boolean(useReducedMotion());
  const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useScroll({ target: stage, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 62, damping: 24, mass: 0.35 });
  useMotionValueEvent(p, "change", (value) => setProgress(value));

  const paper = useTransform(p, [0, 0.7, 0.96], ["#f7f4ed", "#f2eadd", "#101010"]);
  const ink = useTransform(p, [0, 0.76, 0.96], ["#111111", "#111111", "#f7f4ed"]);
  const headlineY = useTransform(p, [0, 0.64, 0.9], [0, -46, -270]);
  const headlineScale = useTransform(p, [0, 0.68, 0.9], [1, 0.95, 0.76]);
  const introOpacity = useTransform(p, [0, 0.68, 0.88], [1, 1, 0]);
  const orbitScale = useTransform(p, [0, 0.72, 1], [1, 1.09, 1.37]);
  const orbitGold = useTransform(p, [0, 1], [-10, 244]);
  const orbitCoral = useTransform(p, [0, 1], [15, -192]);
  const orbitViolet = useTransform(p, [0, 1], [-23, 205]);
  const nextOpacity = useTransform(p, [0.76, 0.92], [0, 1]);
  const nextY = useTransform(p, [0.76, 0.96], [120, 0]);
  const railHeight = useTransform(p, [0, 1], ["0%", "100%"]);

  return (
    <main className="orbit-site locale-en" style={{ direction: "ltr" }}>
      <motion.section ref={stage} className="orbit-site-stage" style={{ backgroundColor: paper, color: ink }}>
        <div className="orbit-site-sticky">
          <header className="orbit-site-nav">
            <a className="orbit-site-brand" href={sitePath("/")}>Layer Studio</a>
            <nav aria-label="Primary navigation"><a href={sitePath("/work")}>Work</a><a href={sitePath("/archive")}>Archive</a><a href={sitePath("/services")}>Services</a><a href={sitePath("/about")}>About</a></nav>
            <div className="orbit-site-actions"><span><b>EN</b><i/>FA</span><a href={sitePath("/contact")}>Let&apos;s Talk <b>↗</b></a></div>
          </header>

          <motion.aside className="orbit-site-rail" style={{ opacity: introOpacity }} aria-hidden="true"><b>01</b><i><motion.em style={{ height: railHeight }}/></i><small>SCROLL TO ORBIT</small><span>{Math.round(progress * 100).toString().padStart(2,"0")}</span></motion.aside>

          <motion.div className="orbit-site-art" style={{ scale: reduced ? 1 : orbitScale }}>
            <GlassOrbitCanvas progress={progress} reduced={reduced}/>
            <motion.div className="site-orbit site-orbit-gold" style={{ rotate: reduced ? -10 : orbitGold }}><i/><span>01 / GOLD ORBIT</span><em>01 / GOLD ORBIT</em></motion.div>
            <motion.div className="site-orbit site-orbit-coral" style={{ rotate: reduced ? 15 : orbitCoral }}><i/><span>02 / CORAL ORBIT</span><em>02 / CORAL ORBIT</em></motion.div>
            <motion.div className="site-orbit site-orbit-violet" style={{ rotate: reduced ? -23 : orbitViolet }}><i/><span>03 / VIOLET ORBIT</span><em>03 / VIOLET ORBIT</em></motion.div>
          </motion.div>

          <motion.div className="orbit-site-copy" style={{ y: reduced ? 0 : headlineY, scale: reduced ? 1 : headlineScale, opacity: introOpacity }}>
            <span className="orbit-scroll-note">LAYERS MOVE ON SCROLL&nbsp;&nbsp; →</span>
            <h1>Content<br/>built to<br/>outlast<br/><span>the moment.</span></h1>
            <p>Layer Studio designs the systems<br/>behind long-running creative and<br/>educational projects.</p>
            <a className="orbit-site-button" href="#motion"><span>View Work</span><b>↗</b></a>
          </motion.div>

          <motion.div className="orbit-site-context" style={{ opacity: introOpacity }}><span>Music</span><i/><span>Education</span><i/><span>Research</span></motion.div>
          <motion.div className="paper-to-ink" style={{ opacity: introOpacity }}>FROM PAPER TO INK&nbsp;&nbsp; ↗</motion.div>
          <motion.div className="orbit-site-next" style={{ opacity: nextOpacity, y: nextY }}><span>LAYER SYSTEM / 02</span><h2>Different parts.<br/>One clear direction.</h2><p>The three colored planes move apart, orbit in space, and become the system behind the work.</p></motion.div>
        </div>
      </motion.section>

      <section id="motion" className="orbit-site-notes"><span>SCROLL CHOREOGRAPHY</span><h2>Motion reveals<br/>the layers.</h2><div>{[["01","Stack"],["02","Separate"],["03","Orbit"],["04","Transform"]].map(([n,t])=><article key={n}><small>{n}</small><h3>{t}</h3></article>)}</div></section>
    </main>
  );
}
