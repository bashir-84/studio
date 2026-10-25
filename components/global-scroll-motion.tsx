"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

export function GlobalScrollMotion() {
  const reduced = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: .25 });
  const driftA = useTransform(progress, [0, 1], [0, reduced ? 0 : 260]);
  const driftB = useTransform(progress, [0, 1], [0, reduced ? 0 : -190]);
  const rotate = useTransform(progress, [0, 1], [0, reduced ? 0 : 320]);

  return (
    <div className="global-motion" aria-hidden="true">
      <div className="scroll-progress"><motion.i style={{ scaleY: progress }}/><span>SCROLL</span></div>
      <motion.span className="motion-node node-gold" style={{ y: driftA, rotate }}/>
      <motion.span className="motion-node node-ink" style={{ y: driftB, rotate }}/>
    </div>
  );
}
