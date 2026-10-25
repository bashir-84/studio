"use client";
import { sitePath } from "@/lib/i18n";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const media = [
  sitePath("/media/services/service-content-system.webp"),
  sitePath("/media/services/service-video-motion.webp"),
  sitePath("/media/services/service-educational-design.webp"),
];

function HeroOne(){
  const ref=useRef<HTMLElement>(null); const reduced=Boolean(useReducedMotion());
  const {scrollYProgress:p}=useScroll({target:ref,offset:["start start","end end"]});
  const titleX=useTransform(p,[0,.7,1],[0,reduced?0:-90,reduced?0:-170]);
  const stackY=useTransform(p,[0,1],[0,reduced?0:-170]);
  const stackRotate=useTransform(p,[0,1],[-4,reduced?-4:5]);
  const figureY0=useTransform(p,[0,1],[0,reduced?0:95]); const figureY1=useTransform(p,[0,1],[55,reduced?55:0]); const figureY2=useTransform(p,[0,1],[110,reduced?110:-95]);
  const figureY=[figureY0,figureY1,figureY2];
  return <section ref={ref} id="direction-1" className="hero-lab-stage lab-one"><div className="hero-lab-sticky"><div className="lab-number">01 / EDITORIAL SPLIT</div><motion.div className="lab-one-copy" style={{x:titleX}}><span>Creative Producer · Content Systems</span><h2>Content built to<br/><em>outlast the moment.</em></h2><p>یک Hero تایپوگرافیک با Story Frameهای متحرک؛ تصاویر هنگام Scroll از کنار متن عبور می‌کنند و لایه‌های پروژه را آشکار می‌سازند.</p><a href={sitePath("/work")}>View Work <b>↗</b></a></motion.div><motion.div className="lab-one-stack" style={{y:stackY,rotate:stackRotate}}>{media.map((src,i)=><motion.figure key={src} style={{y:figureY[i]}}><img src={src} alt=""/><figcaption>0{i+1} / Layer System</figcaption></motion.figure>)}</motion.div><div className="lab-scroll-note">SCROLL TO SEPARATE ↓</div></div></section>
}

function HeroTwo(){
  const ref=useRef<HTMLElement>(null); const reduced=Boolean(useReducedMotion());
  const {scrollYProgress:p}=useScroll({target:ref,offset:["start start","end end"]});
  const lineA=useTransform(p,[0,1],[0,reduced?0:-240]); const lineB=useTransform(p,[0,1],[0,reduced?0:210]);
  const ring=useTransform(p,[0,1],[0,reduced?0:280]); const mediaX=useTransform(p,[0,1],[0,reduced?0:-150]);
  const ringReverse=useTransform(ring,v=>-v*.7); const copyOpacity=useTransform(p,[0,.18,.8,1],[0,1,1,.2]); const mediaScale=useTransform(p,[0,1],[1,1.12]);
  return <section ref={ref} id="direction-2" className="hero-lab-stage lab-two"><div className="hero-lab-sticky"><div className="lab-number">02 / KINETIC SIGNAL</div><div className="signal-grid"/><motion.div className="signal-ring ring-a" style={{rotate:ring}}/><motion.div className="signal-ring ring-b" style={{rotate:ringReverse}}/><div className="kinetic-type"><motion.h2 style={{x:lineA}}>SYSTEMS BEHIND</motion.h2><motion.h2 className="outline" style={{x:lineB}}>VISIBLE WORK</motion.h2><motion.p style={{opacity:copyOpacity}}>Layer Studio builds creative systems for knowledge that deserves to continue.</motion.p></div><motion.figure className="signal-media" style={{x:mediaX,scale:mediaScale}}><video autoPlay muted loop playsInline poster={sitePath("/media/archive/demo/archive-motion-study-poster.webp")}><source src={sitePath("/media/archive/demo/archive-motion-study.mp4")} type="video/mp4"/></video><figcaption>Motion / Content / Identity</figcaption></motion.figure></div></section>
}

function HeroThree(){
  const ref=useRef<HTMLElement>(null); const reduced=Boolean(useReducedMotion());
  const {scrollYProgress:p}=useScroll({target:ref,offset:["start start","end end"]});
  const titleY=useTransform(p,[0,.75,1],[0,reduced?0:-50,reduced?0:-170]);
  const cardTransforms=[
    {x:useTransform(p,[0,1],[0,reduced?0:-260]),y:useTransform(p,[0,1],[0,reduced?0:75]),r:useTransform(p,[0,1],[-7,reduced?-7:-14])},
    {x:useTransform(p,[0,1],[0,0]),y:useTransform(p,[0,1],[0,reduced?0:-90]),r:useTransform(p,[0,1],[0,reduced?0:4])},
    {x:useTransform(p,[0,1],[0,reduced?0:270]),y:useTransform(p,[0,1],[0,reduced?0:40]),r:useTransform(p,[0,1],[7,reduced?7:15])},
  ];
  const orbitRotate=useTransform(p,[0,1],[-8,reduced?-8:220]);
  return <section ref={ref} id="direction-3" className="hero-lab-stage lab-three"><div className="hero-lab-sticky"><div className="lab-number">03 / MODULAR LAYER DECK</div><motion.div className="deck-copy" style={{y:titleY}}><span>We build layer by layer.</span><h2>One clear system.<br/><em>Many moving parts.</em></h2><p>در این مدل، سه Card اصلی از یک Stack واحد جدا می‌شوند؛ استعاره‌ای مستقیم از Strategy، Identity و Production.</p><a href={sitePath("/contact")}>Let&apos;s Talk <b>↗</b></a></motion.div><div className="deck-stack">{media.map((src,i)=><motion.figure key={src} style={{x:cardTransforms[i].x,y:cardTransforms[i].y,rotate:cardTransforms[i].r,zIndex:3-i}}><img src={src} alt=""/><figcaption><b>0{i+1}</b><span>{["SYSTEM","IDENTITY","MOTION"][i]}</span></figcaption></motion.figure>)}</div><motion.div className="deck-orbit" style={{rotate:orbitRotate}}><i/></motion.div></div></section>
}

function HeroFour(){
  const ref=useRef<HTMLElement>(null); const reduced=Boolean(useReducedMotion());
  const {scrollYProgress:p}=useScroll({target:ref,offset:["start start","end end"]});
  const stripY=useTransform(p,[0,1],[120,reduced?120:-420]);
  const titleY=useTransform(p,[0,.75,1],[0,reduced?0:-40,reduced?0:-180]);
  const titleOpacity=useTransform(p,[0,.72,1],[1,1,.08]);
  const shutter=useTransform(p,[0,.45,.8],["inset(0 0 0 0)","inset(8% 8% 8% 8%)","inset(0 34% 0 34%)"]);
  return <section ref={ref} id="direction-4" className="hero-lab-stage lab-four"><div className="hero-lab-sticky"><div className="cinema-grain"/><div className="lab-number">04 / CINEMATIC CUT</div><div className="cinema-time">00:01:24:08<br/>FRAME / 001</div><motion.div className="cinema-copy" style={{y:titleY,opacity:titleOpacity}}><span>A STUDIO FOR IDEAS THAT LAST</span><h2>Make the<br/>invisible<br/><em>felt.</em></h2><p>یک روایت Cinematic با Film Strip عمودی، Grain و تغییر قاب؛ مناسب استودیویی که Video و Storytelling بخش مهمی از هویتش است.</p></motion.div><motion.div className="cinema-window" style={{clipPath:shutter}}><video autoPlay muted loop playsInline poster={sitePath("/media/archive/demo/archive-motion-study-poster.webp")}><source src={sitePath("/media/archive/demo/archive-motion-study.mp4")} type="video/mp4"/></video></motion.div><motion.div className="film-strip" style={{y:stripY}}>{media.concat(media).map((src,i)=><figure key={`${src}-${i}`}><span>{String(i+1).padStart(2,"0")}</span><img src={src} alt=""/></figure>)}</motion.div><div className="cinema-caption">CONTENT SYSTEMS · MOTION · IDENTITY</div></div></section>
}

function HeroFive(){
  const ref=useRef<HTMLElement>(null); const reduced=Boolean(useReducedMotion());
  const {scrollYProgress:p}=useScroll({target:ref,offset:["start start","end end"]});
  const bandX=useTransform(p,[0,1],[0,reduced?0:-330]); const bandReverse=useTransform(p,[0,1],[-180,reduced?-180:160]);
  const blockRotate=useTransform(p,[0,1],[-5,reduced?-5:14]); const blockX=useTransform(p,[0,1],[0,reduced?0:170]);
  const dotScale=useTransform(p,[0,.6,1],[.6,1.7,4]);
  return <section ref={ref} id="direction-5" className="hero-lab-stage lab-five"><div className="hero-lab-sticky"><div className="lab-number">05 / ACID GRID</div><motion.div className="acid-dot" style={{scale:dotScale}}/><div className="acid-meta"><span>NO GENERIC OUTPUTS</span><span>© LAYER / 2026</span></div><div className="acid-type"><motion.h2 style={{x:bandX}}>BUILD THE SYSTEM</motion.h2><motion.h2 className="acid-outline" style={{x:bandReverse}}>BREAK THE PATTERN</motion.h2></div><motion.figure className="acid-image" style={{x:blockX,rotate:blockRotate}}><img src={media[1]} alt=""/><figcaption>VIDEO / MOTION / 03</figcaption></motion.figure><div className="acid-copy"><b>Layer Studio</b><p>یک مدل Brutalist و جسور؛ رنگ، Grid و Typography به‌جای ظرافت کلاسیک، انرژی و شخصیت فوری ایجاد می‌کنند.</p><a href={sitePath("/work")}>EXPLORE WORK ↗</a></div><div className="acid-ruler">01&nbsp;&nbsp;02&nbsp;&nbsp;03&nbsp;&nbsp;04&nbsp;&nbsp;05&nbsp;&nbsp;06&nbsp;&nbsp;07&nbsp;&nbsp;08&nbsp;&nbsp;09</div></div></section>
}

function HeroSix(){
  const ref=useRef<HTMLElement>(null); const reduced=Boolean(useReducedMotion());
  const {scrollYProgress:p}=useScroll({target:ref,offset:["start start","end end"]});
  const galleryX=useTransform(p,[0,1],["8vw",reduced?"8vw":"-74vw"]);
  const titleScale=useTransform(p,[0,.75,1],[1,.82,.64]); const titleY=useTransform(p,[0,1],[0,reduced?0:-160]);
  const rule=useTransform(p,[0,1],["18%","100%"]);
  return <section ref={ref} id="direction-6" className="hero-lab-stage lab-six"><div className="hero-lab-sticky"><div className="lab-number">06 / QUIET GALLERY</div><div className="museum-meta"><span>Independent Creative Studio</span><span>Music · Education · Research</span></div><motion.div className="museum-copy" style={{scale:titleScale,y:titleY}}><h2>Ideas deserve<br/><em>room to grow.</em></h2><p>یک مدل آرام و Gallery-like با Serif بزرگ، فضای سفید و نوار افقی تصاویر؛ حرکت زیاد است اما به‌شکل نرم و بسیار کنترل‌شده.</p></motion.div><motion.div className="museum-gallery" style={{x:galleryX}}>{media.concat([media[0]]).map((src,i)=><figure key={`${src}-${i}`}><img src={src} alt=""/><figcaption><span>0{i+1}</span>{["Content Architecture","Moving Image","Learning Systems","Brand Language"][i]}</figcaption></figure>)}</motion.div><div className="museum-rule"><motion.i style={{width:rule}}/></div><span className="museum-scroll">SCROLL / VIEW THE COLLECTION →</span></div></section>
}

export function HeroLab(){return <main className="hero-lab" dir="ltr"><header className="hero-lab-nav"><a href={sitePath("/")}>← Main Site</a><span>Layer Studio / Hero Direction Lab</span><nav>{[1,2,3,4,5,6].map(n=><a href={`#direction-${n}`} key={n}>0{n}</a>)}</nav></header><section className="hero-lab-intro"><span>SIX CODED DIRECTIONS</span><h1>Choose the motion<br/>language first.</h1><p>شش مدل واقعی، Responsive و Scroll-driven هستند. مدل‌های ۴ تا ۶ عمداً از سه مسیر قبلی فاصله دارند.</p></section><HeroOne/><HeroTwo/><HeroThree/><HeroFour/><HeroFive/><HeroSix/><footer className="hero-lab-end"><span>End of study / 06 directions</span><a href="#direction-1">Back to 01 ↑</a></footer></main>}
