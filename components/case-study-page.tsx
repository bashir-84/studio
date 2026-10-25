import { notFound } from "next/navigation";
import { Header, Footer, ContactBand } from "@/components/site-chrome";
import { ProjectVisual } from "@/components/project-visual";
import { getProject, projects } from "@/lib/site-data";
import { localePath, type Locale } from "@/lib/i18n";

const latinDigits = (value: string) => value.replace(/[۰-۹]/g, d => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)));

export function CaseStudyPage({ slug, locale }: { slug: string; locale: Locale }) {
  const project = getProject(slug);
  if (!project) notFound();
  const en = locale === "en";
  const next = projects[(projects.findIndex(p=>p.slug===slug)+1)%projects.length];
  const title = en ? project.titleEn : project.title;
  const sector = en ? project.sectorEn : project.sector;
  const summary = en ? project.summaryEn : project.summary;
  const services = en ? project.servicesEn : project.services;
  const duration = en ? project.durationEn : project.duration;
  const challenge = en ? project.challengeEn : project.challenge;
  const system = en ? project.systemEn : project.system;
  const outcome = en ? project.outcomeEn : project.outcome;
  const index = en ? latinDigits(project.index) : project.index;
  const nextTitle = en ? next.titleEn : next.title;
  return <main className={en ? "locale-en" : "locale-fa"} lang={locale} dir={en ? "ltr" : "rtl"}><Header locale={locale}/><section className="case-hero" id="info"><div><span className="label">{index} / {sector}</span><h1>{title}</h1><p>{summary}</p><div className="project-profile case-profile"><img src={project.profileImage} alt=""/><span><b>{title}</b><small>{sector} · {en?"Social Media Project":"پروژهٔ شبکه‌های اجتماعی"}</small></span></div></div><div className="case-facts"><div><span>{en?"Engagement":"مدت همکاری"}</span><b>{duration}</b></div><div><span>{en?"Role":"نقش من"}</span><b>{en?"Creative Producer & Content Systems Designer":"تهیه‌کنندهٔ خلاق و طراح سیستم محتوا"}</b></div><div><span>{en?"Services":"خدمات"}</span><b>{services.join(" · ")}</b></div></div></section>
    <section className="case-visual">{project.heroImage ? <figure className="case-hero-image"><img src={project.heroImage} alt={title}/><figcaption><span>{title}</span><b>{index}</b></figcaption></figure> : <ProjectVisual accent={project.accent} title={title} index={index}/>}</section>
    <section className="case-snapshot"><span className="label">{en?"Project Snapshot":"پروژه در یک نگاه"}</span><div><strong>{index}</strong><p>{en?"A long-term system designed around real subject knowledge, repeatable production, and a recognizable visual voice.":"یک همکاری بلندمدت بر پایهٔ شناخت موضوع، تولید تکرارپذیر و یک زبان بصری قابل‌تشخیص."}</p></div><div><span>{en?"Focus":"تمرکز"}</span><b>{services[0]}</b></div><div><span>{en?"Outcome":"نتیجه"}</span><b>{en?"A repeatable creative system":"یک سیستم خلاق تکرارپذیر"}</b></div></section>
    <section className="case-body"><aside><span className="label">{en?"Context":"زمینه"}</span></aside><div><h2>{en?"This was never just about making a video.":"این پروژه هیچ‌وقت فقط ساخت یک ویدئو نبود."}</h2><p className="lead">{en?"The goal was to create the conditions for a body of content to keep moving and growing without losing its voice.":"هدف، ساخت شرایطی بود که یک مجموعه محتوا بتواند بدون ازدست‌دادن صدای خود، به حرکت و رشد ادامه دهد."}</p></div>
      <aside><span className="label">{en?"01 / Challenge":"۰۱ / چالش"}</span></aside><div><h3>{en?"What needed to change?":"چه چیزی باید تغییر می‌کرد؟"}</h3><p>{challenge}</p></div>
      <aside><span className="label">{en?"02 / Approach":"۰۲ / رویکرد"}</span></aside><div id="approach"><h3>{en?"What did we learn?":"چه چیزی را باید می‌فهمیدیم؟"}</h3><p>{en?"The strongest solution had to begin with the subject itself: its audience, teaching rhythm, platform constraints, and the parts that could be standardized without making the work feel generic.":"راه‌حل باید از خود موضوع آغاز می‌شد: مخاطب، ریتم آموزش، محدودیت‌های رسانه و بخش‌هایی که می‌توانستند استاندارد شوند، بدون آنکه کار یکسان و کلیشه‌ای به‌نظر برسد."}</p></div>
      <aside><span className="label">{en?"03 / System":"۰۳ / سیستم"}</span></aside><div id="system"><h3>{en?"What did we design?":"چه سیستمی طراحی کردیم؟"}</h3><p>{system}</p><div className="system-diagram"><span>{en?"Subject":"موضوع"}</span><i>{en?"→":"←"}</i><span>{en?"Format":"قالب"}</span><i>{en?"→":"←"}</i><span>{en?"Process":"فرایند"}</span><i>{en?"→":"←"}</i><span>{en?"Archive":"آرشیو"}</span></div></div>
      <aside><span className="label">{en?"04 / Execution":"۰۴ / اجرا"}</span></aside><div><h3>{en?"A system made visible through every output.":"سیستم در تمام خروجی‌ها قابل‌دیدن شد."}</h3><p>{en?"Editorial rules, visual templates, motion behavior, production roles, and publishing decisions were treated as connected parts of one system rather than isolated deliverables.":"قواعد سردبیری، قالب‌های بصری، رفتار موشن، نقش‌های تولید و تصمیم‌های انتشار، به‌جای خروجی‌های جداگانه به‌عنوان اجزای یک سیستم واحد طراحی شدند."}</p></div>
      <aside><span className="label">{en?"05 / Outcome":"۰۵ / نتیجه"}</span></aside><div><h3>{en?"What became possible?":"چه امکانی ایجاد شد؟"}</h3><p>{outcome}</p><blockquote>{en?"Every version became a draft for the next.":"هر نسخه، پیش‌نویس نسخهٔ بعدی شد."}</blockquote></div>
      <aside><span className="label">{en?"Selected Outputs":"خروجی‌های منتخب"}</span></aside><div className="output-grid" id="gallery">{[1,2,3,4].map(n=>project.outputImages?.[n-1] ? <figure className="output-card output-image" key={n}><img src={project.outputImages[n-1]} alt={`${title} — ${en ? `selected output ${n}` : `خروجی منتخب ${n}`}`}/><figcaption><span>{title}</span><b>0{n}</b></figcaption></figure> : <div className={`output-card ${project.accent}`} key={n}><span>{title}</span><b>0{n}</b></div>)}</div>
    </section>
    <a className="next-project" href={localePath(locale, `/work/${next.slug}`)}><span>{en?"Next Case Study":"پروژهٔ بعدی"}</span><h2>{nextTitle}</h2><b>{en?"→":"←"}</b></a><ContactBand locale={locale}/><Footer locale={locale}/></main>;
}
