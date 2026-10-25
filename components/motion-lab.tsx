"use client";
import { sitePath } from "@/lib/i18n";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArchiveScatter } from "@/components/archive-scatter";
import { ProjectVisual } from "@/components/project-visual";
import { TestimonialCarousel, type TestimonialItem } from "@/components/testimonial-carousel";
import { projects, serviceDetails } from "@/lib/site-data";

const testimonials:TestimonialItem[]=Array.from({length:8},(_,index)=>({
  index:String(index+1).padStart(2,"0"),
  quote:[
    "لایه فقط یک خروجی تحویل نداد؛ روشی ساخت که بتوانیم با آن منظم‌تر، سریع‌تر و با صدای خودمان ادامه بدهیم.",
    "برای اولین‌بار تمام بخش‌های پروژه—از ایده تا انتشار—به‌جای قطعات جدا، مثل یک سیستم واحد کار کردند.",
    "در تمام مسیر احساس کردیم موضوع ما واقعاً فهمیده شده؛ نه اینکه فقط یک ظاهر زیبا روی آن قرار گرفته باشد.",
    "تفاوت اصلی در جزئیات نبود؛ در این بود که بعد از پایان پروژه هم می‌دانستیم قدم بعدی چیست.",
  ][index%4],
  name:`نام مشتری ${String(index+1).padStart(2,"0")}`,
  project:["Podcast Azadi","Educational Brand","Content System","Visual Identity"][index%4],
}));

function MotionHero(){
  const ref=useRef<HTMLElement>(null);
  const {scrollYProgress}=useScroll({target:ref,offset:["start start","end start"]});
  const titleY=useTransform(scrollYProgress,[0,1],[0,-130]);
  const orbitRotate=useTransform(scrollYProgress,[0,1],[0,110]);
  const coreScale=useTransform(scrollYProgress,[0,.75],[1,.72]);
  const partOne=useTransform(scrollYProgress,[0,1],[0,-240]);
  const partTwo=useTransform(scrollYProgress,[0,1],[0,190]);
  return <section className="motion-hero motion-hero-v2" id="motion-intro" ref={ref}>
    <div className="motion-demo-bar"><a href={sitePath("/")}>Layer Studio</a><span>Scroll Narrative / Demo 01</span><b>SCROLL ↓</b></div>
    <motion.div className="hero-system-orbit" style={{rotate:orbitRotate}}><i/><i/><i/><i/></motion.div>
    <motion.div className="hero-system-core" style={{scale:coreScale}}><span>01</span><b>LAYER<br/>SYSTEM</b><small>Strategy · Identity<br/>Motion · Content</small></motion.div>
    <motion.i className="hero-part part-a" style={{y:partOne}}>CONTENT</motion.i><motion.i className="hero-part part-b" style={{y:partTwo}}>MOTION</motion.i><i className="hero-part part-c">IDENTITY</i><i className="hero-part part-d">STORY</i>
    <motion.div className="motion-hero-type-v2" style={{y:titleY}}><span>CREATIVE SYSTEMS FOR LONG-TERM WORK</span><h1>One clear system.<br/><em>Many moving parts.</em></h1><p>یک ساختار روشن برای اینکه Strategy، Content، Identity و Motion به‌جای قطعات جدا، به‌عنوان یک مجموعهٔ زنده حرکت کنند.</p></motion.div>
  </section>;
}

function ServiceStory(){
  return <section className="motion-services" id="motion-services">
    <header><span>02 / SERVICES AS CHAPTERS</span><h2>یک ایده،<br/><em>چهار Layer.</em></h2><p>هر Service هنگام ورود، بخشی از تصویر را کامل می‌کند. به‌جای Accordion معمولی، کاربر Process را قدم‌به‌قدم تجربه می‌کند.</p></header>
    <div className="motion-service-stack">{serviceDetails.map((service,index)=><motion.article initial={{y:90,rotate:index%2?2:-2,scale:.94}} whileInView={{y:0,rotate:0,scale:1}} viewport={{amount:.55}} transition={{duration:.75,ease:[.22,1,.36,1]}} style={{top:`${13+index*4}vh`,background:["#e8b83e","#e96e51","#6b61d8","#192832"][index],color:index===0?"#111":"#fff"}} key={service.number}>
      <div><span>{service.number}</span><b>{service.titleEn}</b></div><img src={service.image} alt=""/><div className="motion-service-copy"><h3>{service.titleFa}</h3><p>{service.summaryFa}</p><small>{service.forFa}</small></div>
    </motion.article>)}</div>
  </section>;
}

function WorkChapter({project,index}:{project:(typeof projects)[number];index:number}){
  const ref=useRef<HTMLElement>(null);
  const {scrollYProgress}=useScroll({target:ref,offset:["start end","end start"]});
  const x=useTransform(scrollYProgress,[0,.5,1],[index%2?-170:170,0,index%2?90:-90]);
  const rotate=useTransform(scrollYProgress,[0,.5,1],[index%2?-8:8,0,index%2?3:-3]);
  const titleX=useTransform(scrollYProgress,[0,1],[index%2?180:-180,index%2?-120:120]);
  return <section className={`motion-work-chapter tone-${index+1}`} ref={ref}>
    <div className="motion-work-index"><span>0{index+1}</span><i/><b>{project.sector}</b></div>
    <motion.div className="motion-work-visual" style={{x,rotate}}><ProjectVisual accent={project.accent} title={project.title} index={project.index}/></motion.div>
    <motion.h3 style={{x:titleX}}>{project.titleEn.toUpperCase()}</motion.h3>
    <div className="motion-work-copy"><span>Case Study / 0{index+1}</span><p>{project.summary}</p><a href={sitePath(`/work/${project.slug}`)}>OPEN CASE STUDY ↗</a></div>
  </section>;
}

export function MotionLab(){
  return <main className="motion-lab" dir="rtl">
    <MotionHero/>
    <ServiceStory/>
    <section className="motion-work" id="motion-work"><header><span>03 / SELECTED WORK</span><h2>شش Case Study؛<br/>شش ریتم متفاوت.</h2><p>هر پروژه یک فصل مستقل است. رنگ، جهت حرکت و Timing با پروژه بعدی تغییر می‌کند تا فهرست Work شبیه یک Grid تکراری نباشد.</p></header>{projects.map((project,index)=><WorkChapter project={project} index={index} key={project.slug}/>)}</section>
    <section className="motion-archive-story" id="motion-archive"><div><span>04 / ARCHIVE</span><h2>Chaos → System → Chaos</h2><p>کارت‌ها پراکنده وارد می‌شوند، در نقطهٔ تمرکز به یک Grid منظم تبدیل می‌شوند و هنگام خروج دوباره فاصله می‌گیرند.</p></div><ArchiveScatter/></section>
    <section className="motion-testimonials" id="motion-voices"><header><span>05 / TRUSTED VOICES</span><h2>تجربهٔ همکاری،<br/><em>در حرکت دائمی.</em></h2><p>کارت‌ها عریض‌اند، Scroll دستی ندارند و هر چند ثانیه یک‌به‌یک جلو می‌روند. با Hover موقتاً متوقف می‌شوند.</p></header><TestimonialCarousel items={testimonials}/></section>
    <footer className="motion-lab-footer motion-lab-footer-v2"><span>THE NEXT LAYER</span><div className="footer-orbit-stage"><h2 className="footer-orbit-copy footer-orbit-copy-back">Have a story<br/>worth building?</h2><div className="footer-orbit-3d"><i className="orbit-line line-a"/><i className="orbit-line line-b"/><i className="orbit-line line-c"/><b className="orbit-point point-a"/><b className="orbit-point point-b"/><b className="orbit-point point-c"/></div><h2 className="footer-orbit-copy footer-orbit-copy-front" aria-hidden="true">Have a story<br/>worth building?</h2></div><a href="mailto:bashiramri84@gmail.com">bashiramri84@gmail.com ↗</a><div><a href={sitePath("/")}>BACK TO MAIN SITE</a><b>Layer Studio © 2026</b></div></footer>
  </main>;
}
