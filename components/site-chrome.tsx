"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { localePath, sitePath, type Locale } from "@/lib/i18n";
import { GlobalScrollMotion } from "@/components/global-scroll-motion";

export function Mark() {
  return <span className="mark" aria-hidden="true"><i/><i/><i/></span>;
}

function languagePath(pathname: string, locale: Locale) {
  if (locale === "en") {
    const path = pathname.replace(/^\/en(?=\/|$)/, "");
    return sitePath(path || "/");
  }
  return sitePath(pathname === "/" ? "/en" : `/en${pathname}`);
}

export function Header({ locale = "fa" }: { locale?: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const en = locale === "en";
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = en ? "ltr" : "rtl";
  }, [en, locale]);
  const nav = en
    ? [["Work", "/work"], ["Archive", "/archive"], ["Services", "/services"], ["Brands", "/brands"], ["About", "/about"]]
    : [["پروژه‌ها", "/work"], ["آرشیو", "/archive"], ["خدمات", "/services"], ["برندها", "/brands"], ["درباره", "/about"]];
  return (
    <>
      <header className="nav-shell">
        <a className="brand" href={localePath(locale, "/")} aria-label={en ? "Layer Studio home" : "خانه استودیو لِیِر"}><Mark/><span>Layer Studio</span></a>
        <nav aria-label={en ? "Main navigation" : "منوی اصلی"}>
          {nav.map(([label, path]) => <a href={localePath(locale, path)} key={path}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <a className="language-switch" href={languagePath(pathname, locale)} aria-label={en ? "مشاهده نسخه فارسی" : "View English version"}>{en ? "FA" : "EN"}</a>
          <a className="nav-cta" href={localePath(locale, "/contact")}>{en ? "Let's Talk" : "شروع گفت‌وگو"} <span>{en ? "↗" : "←"}</span></a>
          <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={en ? "Open menu" : "بازکردن منو"}><i/><i/></button>
        </div>
      </header>
      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        {nav.map(([label, path], index) => <a href={localePath(locale, path)} key={path}><small>0{index + 1}</small>{label}</a>)}
        <a href={localePath(locale, "/contact")}><small>06</small>{en ? "Contact" : "تماس"}</a>
        <a className="mobile-language" href={languagePath(pathname, locale)}>{en ? "نسخه فارسی" : "English Version"}</a>
      </div>
      <GlobalScrollMotion/>
    </>
  );
}

export function Footer({ locale = "fa" }: { locale?: Locale }) {
  const en = locale === "en";
  const links = [
    { label: "Email", href: "mailto:bashiramri84@gmail.com", icon: <path d="M3 5.5h18v13H3zM3 6l9 7 9-7"/> },
    { label: "Telegram", href: "https://t.me/bashiramrii", icon: <path d="m3 11 18-7-4 16-6-5-4 3 1-6 10-5-7 8"/> },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bashiramri/", icon: <><path d="M5 9v10M5 5.5v.01M10 19v-6c0-2.2 1.3-4 3.7-4 2.8 0 4.3 1.8 4.3 5v5M10 9v10"/></> },
  ];
  return (
    <footer className="site-footer">
      <div className="footer-motion-line" aria-hidden="true"><span>LAYER BY LAYER · CONTENT IN MOTION · SYSTEMS THAT LAST · LAYER BY LAYER · CONTENT IN MOTION · SYSTEMS THAT LAST · </span></div>
      <div className="footer-top">
        <a className="brand" href={localePath(locale, "/")}><Mark/><span>Layer Studio</span></a>
        <p>{en ? "An independent studio for content systems, identity, and moving image." : "استودیویی مستقل برای سیستم‌های محتوا، هویت بصری و تصویر متحرک."}</p>
        <nav aria-label={en ? "Footer navigation" : "منوی فوتر"}><a href={localePath(locale,"/work")}>{en?"Work":"پروژه‌ها"}</a><a href={localePath(locale,"/archive")}>{en?"Archive":"آرشیو"}</a><a href={localePath(locale,"/services")}>{en?"Services":"خدمات"}</a><a href={localePath(locale,"/brands")}>{en?"Brands":"برندها"}</a><a href={localePath(locale,"/about")}>{en?"About":"درباره"}</a></nav>
      </div>
      <div className="footer-bottom">
        <div className="social-links" aria-label={en ? "Contact links" : "لینک‌های ارتباطی"}>{links.map(link=><a href={link.href} target={link.href.startsWith("http")?"_blank":undefined} rel={link.href.startsWith("http")?"noreferrer":undefined} aria-label={link.label} title={link.label} key={link.label}><svg viewBox="0 0 24 24" aria-hidden="true">{link.icon}</svg><span>{en?link.label:({Email:"ایمیل",Telegram:"تلگرام",LinkedIn:"لینکدین"} as Record<string,string>)[link.label]}</span></a>)}</div>
        <span>{en ? "Bashir Amri · Available worldwide" : "بشیر عمری · همکاری از راه دور در سراسر جهان"}</span>
        <span>© 2026 Layer Studio</span>
      </div>
    </footer>
  );
}

export function ContactBand({ locale = "fa" }: { locale?: Locale }) {
  const en = locale === "en";
  return (
    <section className="contact-band">
      <div><span className="label">{en ? "Have something worth preserving?" : "چیزی ارزشمند دارید که باید ماندگار شود؟"}</span><span>{en ? "Selected collaborations" : "Selected Collaborations"}</span></div>
      <div className="contact-band-main"><h2>{en ? <>Start with<br/><em>the real problem.</em></> : <>از مسئلهٔ واقعی<br/><em>شروع کنیم.</em></>}</h2><p>{en ? "Tell me what you are building, what already exists, and where the process keeps breaking." : "بگویید چه چیزی می‌سازید، اکنون چه چیزی دارید و فرایند در کدام نقطه متوقف می‌شود."}</p></div>
      <a href={localePath(locale,"/contact")}><span>{en ? "Choose a contact channel" : "انتخاب راه ارتباطی"}</span><b>{en?"↗":"←"}</b></a>
    </section>
  );
}
