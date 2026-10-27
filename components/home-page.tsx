"use client";
import { sitePath } from "@/lib/i18n";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Header } from "@/components/site-chrome";
import { ProjectVisual } from "@/components/project-visual";
import { projects, serviceDetails } from "@/lib/site-data";
import { latinDigits, localePath, type Locale } from "@/lib/i18n";
import { ArchiveScatter } from "@/components/archive-scatter";
import { HomeProgressNav } from "@/components/home-progress-nav";

const reveal = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-70px" }, transition: { duration: .7, ease: [0.22, 1, 0.36, 1] as const } };

function HomeMotionHero({locale}:{locale:Locale}){
  const en=locale==="en";
  const ref=useRef<HTMLElement>(null);
  const {scrollYProgress}=useScroll({target:ref,offset:["start start","end start"]});
  const titleY=useTransform(scrollYProgress,[0,1],[0,-115]);
  const orbitRotate=useTransform(scrollYProgress,[0,1],[0,105]);
  const coreScale=useTransform(scrollYProgress,[0,.8],[1,.74]);
  return <section className="motion-hero motion-hero-v2 home-motion-hero" id="top" ref={ref}>
    <div className="home-hero-art" aria-hidden="true">
    <motion.div className="hero-system-orbit" style={{rotate:orbitRotate}}><i/><i/><i/><i/></motion.div>
    <motion.div className="hero-system-core" style={{scale:coreScale}}><span>01</span><b>LAYER<br/>SYSTEM</b><small>Strategy · Identity<br/>Motion · Content</small></motion.div>
    <i className="hero-part part-a">CONTENT</i><i className="hero-part part-b">MOTION</i><i className="hero-part part-c">IDENTITY</i><i className="hero-part part-d">STORY</i>
    </div>
    <motion.div className="motion-hero-type-v2" style={{y:titleY}}><span>{en?"CREATIVE SYSTEMS FOR LONG-TERM WORK":"سیستم‌های خلاق برای همکاری‌های ماندگار"}</span><h1>{en?<>One clear system.<br/><em>Many moving parts.</em></>:<>یک سیستم روشن.<br/><em>لایه‌هایی در حرکت.</em></>}</h1><p>{en?"Layer Studio connects strategy, content, identity, and motion into one living system—built for work that needs to keep growing.":"در لِیِر، استراتژی، محتوا، هویت بصری و موشن به هم پیوند می‌خورند؛ در قالب سیستمی منسجم برای پروژه‌هایی که قرار است رشد کنند."}</p><a className="home-hero-link" href={localePath(locale,"/work")}>{en?"Explore selected work ↗":"مشاهده پروژه‌های منتخب ←"}</a></motion.div>
  </section>;
}

const fullServiceCopy = [
  {description:"I design practical content systems for educators and creators who need to publish consistently—without reinventing the process every week.", label:"From idea to output:", bullets:["Content strategy & planning","Repeatable content formats","Production workflows","Review & approval systems","Publishing structures","Multi-platform content adaptation"], closing:"The result is a clearer, faster, and more sustainable way to create."},
  {description:"I build visual systems for educators, creators, and content-driven brands—creating consistency without turning every piece of content into the same template.", label:"Building the visual language through:", bullets:["Art direction","Typography & color systems","Social media design","Video & motion language","Educational graphics","Templates & reusable assets"], closing:"One recognizable identity, flexible enough to live across every platform."},
  {description:"I shape educational and creator-led video from the first idea to the final frame—combining storytelling, editing, motion, sound, and visual direction.", label:"From raw material to final cut:", bullets:["Video concepts & formats","Story & content structure","Video editing","Motion graphics","Sound & post-production","Social & long-form adaptations"], closing:"The goal is not simply a polished video, but one that makes the idea clearer, holds attention, and stays memorable."},
  {description:"I help educators transform expertise, books, research, workshops, and years of teaching into structured digital learning experiences.", label:"Knowledge can become:", bullets:["Educational video series","Online courses","Learning journeys","Lesson structures","Visual learning materials","Short-form educational content"], closing:"Complex knowledge becomes easier to follow, easier to remember, and designed for how people actually learn online."},
];

const fullServiceCopyFa = [
 {description:"برای مدرسان و تولیدکنندگان محتوا، سیستم‌هایی کاربردی طراحی می‌کنم تا بتوانند منظم منتشر کنند و هر هفته فرایند را از نو نسازند.",label:"از ایده تا انتشار:",bullets:["استراتژی و برنامه‌ریزی محتوا","قالب‌های تکرارپذیر محتوا","فرایندهای تولید","سازوکار بازبینی و تأیید","ساختارهای انتشار","تطبیق محتوا برای رسانه‌های مختلف"],closing:"نتیجه، مسیری روشن‌تر، سریع‌تر و پایدارتر برای خلق محتواست."},
 {description:"برای مدرسان، تولیدکنندگان محتوا و برندهای محتوایی، سیستم‌های بصری می‌سازم؛ با انسجامی که به هر محتوا اجازه می‌دهد شخصیت خودش را داشته باشد.",label:"ساخت زبان بصری با:",bullets:["هدایت هنری","نظام تایپوگرافی و رنگ","طراحی شبکه‌های اجتماعی","زبان بصری ویدئو و موشن","گرافیک آموزشی","قالب‌ها و عناصر قابل‌استفادهٔ مجدد"],closing:"یک هویت آشنا و متمایز، با انعطاف کافی برای حضور در هر رسانه."},
 {description:"ویدئوهای آموزشی و خلاق را از نخستین ایده تا آخرین قاب شکل می‌دهم؛ با ترکیب روایت، تدوین، موشن، صدا و هدایت بصری.",label:"از مواد خام تا نسخهٔ نهایی:",bullets:["ایده و قالب ویدئو","ساختار روایت و محتوا","تدوین ویدئو","موشن‌گرافیک","صدا و پس‌تولید","نسخه‌های کوتاه و بلند برای رسانه‌های مختلف"],closing:"هدف، ویدئویی است که ایده را روشن‌تر بیان کند، توجه را نگه دارد و در ذهن بماند."},
 {description:"به مدرسان کمک می‌کنم تخصص، کتاب‌ها، پژوهش‌ها، کارگاه‌ها و سال‌ها تجربهٔ تدریس را به تجربه‌های منظم یادگیری دیجیتال تبدیل کنند.",label:"دانش می‌تواند تبدیل شود به:",bullets:["مجموعه‌های ویدئویی آموزشی","دوره‌های آنلاین","مسیرهای یادگیری","ساختار درس‌ها","مواد بصری برای یادگیری","محتوای آموزشی کوتاه"],closing:"دانش پیچیده، روشن‌تر و به‌یادماندنی‌تر می‌شود؛ متناسب با شیوهٔ واقعی یادگیری مخاطب در فضای آنلاین."},
];

function HomeServiceLayers({locale}:{locale:Locale}){
  const en=locale==="en";
  return <section className="motion-services home-motion-services" id="services"><header><span>{en?"02 / SERVICES":"۰۲ / خدمات"}</span><h2>{en?<>One idea,<br/><em>four layers.</em></>:<>یک ایده،<br/><em>چهار لایه.</em></>}</h2><p>{en?"Four disciplines move together to turn isolated outputs into a system that can continue.":"چهار تخصص کنار هم حرکت می‌کنند تا خروجی‌های پراکنده به سیستمی قابل‌ادامه تبدیل شوند."}</p></header><div className="motion-service-stack">{serviceDetails.map((service,index)=>{const copy=en?fullServiceCopy[index]:fullServiceCopyFa[index];return <motion.article initial={{y:70,rotate:index%2?1.4:-1.4,scale:.96}} whileInView={{y:0,rotate:0,scale:1}} viewport={{amount:.5}} transition={{duration:.65,ease:[.22,1,.36,1]}} style={{top:`${11+index*3}vh`,background:["#e8b83e","#e96e51","#6b61d8","#192832"][index],color:index===0?"#111":"#fff"}} key={service.number}><div><span>{en?service.number:service.numberFa}</span><b>{en?service.titleEn:service.titleFa}</b></div><img src={service.image} alt=""/><div className="motion-service-copy"><h3>{en?service.titleEn:service.titleFa}</h3><p>{en?<strong>{service.summaryEn}</strong>:service.summaryFa}</p>{<><p>{copy.description}</p><b className="service-list-label">{copy.label}</b><ul>{copy.bullets.map(item=><li key={item}>{item}</li>)}</ul><p className="service-closing">{copy.closing}</p></>}</div></motion.article>})}</div></section>;
}

function HomeWorkChapter({project,index,locale}:{project:(typeof projects)[number];index:number;locale:Locale}){
  const en=locale==="en";
  const ref=useRef<HTMLElement>(null);
  const {scrollYProgress}=useScroll({target:ref,offset:["start end","end start"]});
  const x=useTransform(scrollYProgress,[0,.5,1],[index%2?-115:115,0,index%2?60:-60]);
  const rotate=useTransform(scrollYProgress,[0,.5,1],[index%2?-6:6,0,index%2?2:-2]);
  const titleX=useTransform(scrollYProgress,[0,1],[index%2?120:-120,index%2?-70:70]);
  const title=en?project.titleEn:project.title;
  return <section className={`motion-work-chapter home-work-chapter tone-${index+1}`} ref={ref}><div className="motion-work-index"><span>0{index+1}</span><i/><b>{en?project.sectorEn:project.sector}</b></div><motion.div className="motion-work-visual" style={{x,rotate}}><ProjectVisual accent={project.accent} title={title} index={en?latinDigits(project.index):project.index}/></motion.div><motion.h3 style={{x:titleX}}>{project.titleEn.toUpperCase()}</motion.h3><div className="motion-work-copy"><span>{en?`CASE STUDY / 0${index+1}`:`مطالعهٔ موردی / ${project.index}`}</span><p>{en?project.summaryEn:project.summary}</p><a href={localePath(locale,`/work/${project.slug}`)}>{en?"OPEN CASE STUDY ↗":"مشاهده مطالعهٔ موردی ←"}</a></div></section>;
}

function MoreWorkCTA({locale}:{locale:Locale}){
  const en=locale==="en";
  return <section className="more-work-cta"><div className="more-work-preview" aria-hidden="true">{projects.slice(4).map((project,index)=><div className={`preview-card preview-${index+1}`} key={project.slug}><ProjectVisual accent={project.accent} title={en?project.titleEn:project.title} index={en?latinDigits(project.index):project.index}/></div>)}</div><div className="more-work-copy"><span>{en?"03+ / MORE CASE STUDIES":"پروژه‌های بیشتر"}</span><h2>{en?<>More systems.<br/>More stories.</>:<>سیستم‌های بیشتر.<br/>داستان‌های بیشتر.</>}</h2><p>{en?"These three selected projects are only the beginning. Explore the complete collection of collaborations and evolving systems.":"این سه پروژهٔ منتخب فقط شروع مجموعه‌اند. تمام همکاری‌ها و سیستم‌هایی را ببینید که در طول زمان ساخته و کامل شده‌اند."}</p><a href={localePath(locale,"/work")}>{en?"View all Case Studies ↗":"مشاهده همه مطالعات موردی ←"}</a></div></section>;
}

function HomeOrbitFooter({locale}:{locale:Locale}){
  const en=locale==="en";
  const nav=[["Work","/work"],["Archive","/archive"],["Services","/services"],["Brands","/brands"],["About","/about"],["Contact","/contact"]];
  return <footer className="motion-lab-footer motion-lab-footer-v2 home-orbit-footer"><span>{en?"THE NEXT LAYER":"لایهٔ بعدی"}</span><div className="footer-orbit-stage"><h2 className="footer-orbit-copy footer-orbit-copy-back">{en?<>Have a story<br/>worth building?</>:<>ایده‌ای دارید<br/>که ارزش ساختن دارد؟</>}</h2><div className="footer-orbit-3d"><i className="orbit-line line-a"/><i className="orbit-line line-b"/><i className="orbit-line line-c"/><b className="orbit-point point-a"/><b className="orbit-point point-b"/><b className="orbit-point point-c"/></div><h2 className="footer-orbit-copy footer-orbit-copy-front" aria-hidden="true">{en?<>Have a story<br/>worth building?</>:<>ایده‌ای دارید<br/>که ارزش ساختن دارد؟</>}</h2></div><div className="home-footer-grid"><div><b>Layer Studio</b><p>{en?"An independent studio for content systems, identity, and moving image.":"استودیویی مستقل برای سیستم‌های محتوا، هویت بصری و تصویر متحرک."}</p></div><nav>{nav.map(([label,path])=><a href={localePath(locale,path)} key={path}>{en?label:({Work:"پروژه‌ها",Archive:"آرشیو",Services:"خدمات",Brands:"برندها",About:"درباره",Contact:"تماس"} as Record<string,string>)[label]}</a>)}</nav><div className="home-footer-contact"><a href="mailto:bashiramri84@gmail.com">{en?"Email ↗":"ایمیل ←"}</a><a href="https://t.me/bashiramrii" target="_blank" rel="noreferrer">{en?"Telegram ↗":"تلگرام ←"}</a><a href="https://www.linkedin.com/in/bashiramri/" target="_blank" rel="noreferrer">{en?"LinkedIn ↗":"لینکدین ←"}</a></div></div><div className="home-footer-bottom"><span>{en?"Bashir Amri":"بشیر عمری"} · {en?"Available worldwide":"همکاری از راه دور در سراسر جهان"}</span><b>Layer Studio © 2026</b></div></footer>;
}

export function HomePage({ locale }: { locale: Locale }) {
  const en = locale === "en";
  return (
    <main className={`studio-home ${en ? "locale-en" : "locale-fa"}`} lang={locale} dir={en ? "ltr" : "rtl"}>
      <Header locale={locale}/>
      <HomeProgressNav locale={locale}/>
      <HomeMotionHero locale={locale}/>

      <section className="stats"><div><strong dir="ltr">{en?"20+":"۲۰+"}</strong><span>{en ? "Creative collaborations" : "همکاری خلاق"}</span><p>{en?"Across education, music, media, and specialist brands.":"در آموزش، موسیقی، رسانه و برندهای تخصصی."}</p></div><div><strong dir="ltr">{en?"600+":"۶۰۰+"}</strong><span>{en ? "Published outputs" : "خروجی منتشرشده"}</span><p>{en?"Video, motion, identity, and learning content.":"ویدئو، موشن، هویت و محتوای آموزشی."}</p></div><div><strong>{en?"6":"۶"}</strong><span>{en ? "Long-term systems" : "سیستم محتوای بلندمدت"}</span><p>{en?"Built to continue beyond a single campaign.":"طراحی‌شده برای ادامه، فراتر از یک کمپین."}</p></div><div><strong dir="ltr">{en?"5+":"۵+"}</strong><span>{en ? "Years of iteration" : "سال یادگیری و بهبود"}</span><p>{en?"Every publishing cycle informs the next.":"هر چرخهٔ انتشار، نسخهٔ بعد را بهتر کرده است."}</p></div></section>

      <section className="intro-section knowledge-section"><div><span className="label">{en ? "The Problem" : "مسئله"}</span><motion.p {...reveal}>{en ? <>Most valuable knowledge disappears the day it is shared. <span>We turn it into a system that repeats, improves, and grows.</span></> : <>دانش ارزشمند، بدون مسیری برای ادامه، در میان محتواهای روزمره گم می‌شود. <span>ما آن را به سیستمی تبدیل می‌کنیم که تکرار می‌شود، بهتر می‌شود و رشد می‌کند.</span></>}</motion.p></div><div className="knowledge-slider" aria-label={en?"Selected studio imagery":"تصاویر منتخب استودیو"}>{["service-content-system.webp","service-video-motion.webp","service-brand-system.webp"].map((src,index)=><figure key={src} style={{animationDelay:`${index*3.4}s`}}><img src={sitePath(`/media/services/${src}`)} alt=""/><span>0{index+1} / Layer Studio</span></figure>)}</div></section>

      <HomeServiceLayers locale={locale}/>
      <section className="motion-work home-motion-work" id="case-studies"><header><span>{en?"03 / SELECTED WORK":"۰۳ / پروژه‌های منتخب"}</span><h2>{en?<>The final work is<br/><em>only half the story.</em></>:<>کار نهایی،<br/><em>تنها نیمی از داستان است.</em></>}</h2><p>{en?"Go behind the finished frame—into the choices, experiments, constraints, and turning points that shaped each project.":"به پشتِ قاب نهایی بروید؛ به انتخاب‌ها، تجربه‌ها، محدودیت‌ها و نقطه‌عطف‌هایی که هر پروژه را شکل داده‌اند."}</p></header>{projects.slice(0,3).map((project,index)=><HomeWorkChapter project={project} index={index} locale={locale} key={project.slug}/>)}</section>
      <MoreWorkCTA locale={locale}/>

      <section className="philosophy"><video className="philosophy-video" autoPlay muted loop playsInline poster={sitePath("/media/archive/demo/archive-motion-study-poster.webp")}><source src={sitePath("/media/archive/demo/archive-motion-study.mp4")} type="video/mp4"/></video><div className="philosophy-shade"/><span className="label">{en?"Philosophy":"نگاه ما"}</span><motion.p className="statement" {...reveal}>{en ? <>A great video is a moment.<br/><span>A system makes that moment repeatable, improvable, and able to outlive its maker.</span></> : <>یک ویدئوی خوب، یک لحظه است.<br/><span>این سیستم است که اجازه می‌دهد آن لحظه تکرار شود، بهتر شود و از سازنده‌اش ماندگارتر بماند.</span></>}</motion.p><div className="principles"><span>{en ? "Understand the subject." : "موضوع را بفهم."}</span><span>{en ? "Design the system." : "سیستم را طراحی کن."}</span><span>{en ? "Improve through motion." : "با حرکت، بهتر شو."}</span></div></section>

      <section className="motion-archive-story home-motion-archive" id="archive"><div><span>{en?"04 / ARCHIVE":"۰۴ / آرشیو"}</span><h2>{en?"Chaos → System → Chaos":"از پراکندگی به نظم؛ از نظم به تجربه"}</h2><p>{en?"Six independent entry points into the archive. Every tile opens the full collection.":"شش ورودی مستقل به آرشیو؛ هر کارت شما را به صفحهٔ کامل آرشیو می‌برد."}</p><a className="archive-story-link" href={localePath(locale,"/archive")}>{en?"Browse Archive ↗":"مرور آرشیو ←"}</a></div><ArchiveScatter href={localePath(locale,"/archive")}/></section>

      <section className="about-teaser" id="studio"><span className="label">{en?"Studio":"استودیو"}</span><div><h2>{en ? <>Not just an editor.<br/>A systems designer for creative work.</> : <>فراتر از تدوین؛<br/>طراحی سیستم برای کار خلاق.</>}</h2><p>{en ? "Layer is an independent studio led by Bashir Amri. What began with a mobile phone in a spare room has grown across six long-term projects into a practice spanning content strategy, visual identity, educational design, and production." : "لِیِر یک استودیوی مستقل به مدیریت بشیر عمری است. مسیری که با یک تلفن همراه در اتاقی ساده آغاز شد، در شش پروژهٔ بلندمدت به تجربه‌ای در استراتژی محتوا، هویت بصری، طراحی آموزشی و تولید تبدیل شده است."}</p><a className="text-link" href={localePath(locale, "/about")}>{en ? "Read the full approach ↗" : "رویکرد کامل استودیو ←"}</a></div></section>
      <div id="contact"><HomeOrbitFooter locale={locale}/></div>
    </main>
  );
}
