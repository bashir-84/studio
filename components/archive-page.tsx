"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Header, Footer, ContactBand } from "@/components/site-chrome";
import { archiveItems, type ArchiveItem } from "@/lib/site-data";
import { pngImageSources } from "@/lib/archive-graphics";
import { latinDigits, localePath, type Locale } from "@/lib/i18n";

const categories = [
  {value:"All",fa:"همه",en:"All"},
  {value:"Video Editing",fa:"تدوین ویدئو",en:"Video Editing"},
  {value:"Long-form Video",fa:"ویدئوی بلند",en:"Long-form Video"},
  {value:"Graphic Design",fa:"طراحی گرافیک",en:"Graphic Design"},
  {value:"Motion Design",fa:"طراحی موشن",en:"Motion Design"},
  {value:"Logo Motion",fa:"لوگو موشن",en:"Logo Motion"},
];

const graphicSubcategories = [
  {value:"All",fa:"همه",en:"All"},
  {value:"Logo",fa:"لوگو و هویت بصری",en:"Logo & Identity"},
  {value:"Poster",fa:"پوستر",en:"Poster"},
  {value:"Book Cover",fa:"بوک‌کاور",en:"Book Cover"},
  {value:"Music Cover",fa:"کاور موسیقی",en:"Music Cover"},
];

function ArchiveMedia({ item, locale, modal = false, paused = false, playback, onRatio }: { item: ArchiveItem; locale: Locale; modal?: boolean; paused?: boolean; playback: Map<string, HTMLVideoElement>; onRatio: (slug: string, ratio: string) => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [sound, setSound] = useState(false);
  const [failed, setFailed] = useState(false);
  const [visible, setVisible] = useState(modal);
  const [entered, setEntered] = useState(modal);
  const [retry, setRetry] = useState(0);
  const retryTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const source = modal ? item.src : (item.previewSrc || item.src);
  const mediaSrc = source && (modal || entered) ? `${source}${retry ? `${source.includes("?") ? "&" : "?"}retry=${retry}` : ""}` : undefined;
  const play = () => {
    const video = videoRef.current;
    if (!video || paused || (!modal && !visible)) return;
    video.muted = !modal || !sound;
    void video.play().catch(() => {});
  };
  useEffect(() => {
    const video = videoRef.current;
    if (!video || modal) return;
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
      if (entry.isIntersecting) setEntered(true);
    }, { rootMargin: "160px 0px" });
    observer.observe(video);
    return () => observer.disconnect();
  }, [modal]);
  useEffect(() => () => { if (retryTimer.current) clearTimeout(retryTimer.current); }, []);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !modal || !sound;
    if (paused || (!modal && !visible)) video.pause();
    else void video.play().catch(() => {});
  }, [paused, modal, sound, visible, mediaSrc]);
  useEffect(() => {
    const video = videoRef.current;
    if (!video || modal) return;
    playback.set(item.slug, video);
    return () => { playback.delete(item.slug); };
  }, [item.slug, modal, playback]);
  const title = locale === "en" ? (item.titleEn || item.title) : item.title;
  if (item.mediaType === "image" && item.src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className={pngImageSources.has(item.src) ? "png-artwork" : undefined} src={item.src} alt={title} loading={modal ? "eager" : "lazy"} onLoad={(event) => { const image = event.currentTarget; if (image.naturalWidth && image.naturalHeight) onRatio(item.slug, `${image.naturalWidth} / ${image.naturalHeight}`); }} />;
  }
  if (item.mediaType === "video" && item.src) {
    return <>
      <video ref={videoRef} src={mediaSrc} poster={item.poster} autoPlay={modal || visible} muted={!modal || !sound} loop playsInline controls={modal} preload={modal || entered ? "metadata" : "none"} aria-label={title}
        onLoadedMetadata={(event) => {
          const video = event.currentTarget;
          if (video.videoWidth && video.videoHeight) onRatio(item.slug, `${video.videoWidth} / ${video.videoHeight}`);
          if (modal) {
            const card = playback.get(item.slug);
            if (card && Number.isFinite(card.currentTime) && Number.isFinite(video.duration)) video.currentTime = Math.min(card.currentTime, Math.max(0, video.duration - 0.1));
          }
        }}
        onLoadedData={play}
        onCanPlay={play}
        onVolumeChange={(event) => { if (modal) setSound(!event.currentTarget.muted && event.currentTarget.volume > 0); }}
        onError={() => {
          if (retry < 2 && !retryTimer.current) retryTimer.current = setTimeout(() => {
            retryTimer.current = null;
            setRetry((current) => current + 1);
          }, 2000 * (retry + 1));
          else if (retry >= 2) setFailed(true);
        }} />
      {modal && !failed && <button type="button" className="video-sound-toggle" onClick={() => setSound((current) => !current)}>{locale === "en" ? (sound ? "Mute sound" : "Enable sound") : (sound ? "قطع صدا" : "روشن‌کردن صدا")}</button>}
      {modal && failed && <p className="video-error">{locale === "en" ? "This video could not be loaded from Drive. Please try again later." : "دریافت این ویدئو از درایو ناموفق بود. کمی بعد دوباره امتحان کنید."}</p>}
    </>;
  }
  return <><i /><i /><span>{locale === "en" ? latinDigits(item.number) : item.number}</span></>;
}

export function ArchivePage({locale}:{locale:Locale}) {
  const en=locale==="en";
  const [filter, setFilter] = useState("All");
  const [graphicFilter, setGraphicFilter] = useState("All");
  const [selected, setSelected] = useState<ArchiveItem | null>(null);
  const [ratios, setRatios] = useState<Record<string, string>>({});
  const playback = useRef(new Map<string, HTMLVideoElement>());
  const measured = useRef(new Set<string>());
  const onRatio = (slug: string, ratio: string) => {
    measured.current.add(slug);
    setRatios((current) => current[slug] === ratio ? current : {...current, [slug]: ratio});
  };
  const items = useMemo(() => {
    const categoryItems = filter === "All" ? archiveItems.filter((item) => item.typeEn !== "Graphic Design") : archiveItems.filter((item) => item.typeEn === filter);
    return filter !== "Graphic Design" || graphicFilter === "All"
      ? categoryItems
      : categoryItems.filter((item) => item.subCategory === graphicFilter);
  }, [filter, graphicFilter]);
  useEffect(() => { archiveItems.forEach((item) => { if (!item.poster) return; const image = new Image(); image.onload = () => { if (!measured.current.has(item.slug) && image.naturalWidth && image.naturalHeight) setRatios((current) => ({...current, [item.slug]: `${image.naturalWidth} / ${image.naturalHeight}`})); }; image.src = item.poster; }); }, []);
  const basePath=localePath(locale,"/archive");
  const openItem = (item: ArchiveItem) => { setSelected(item); window.history.replaceState(null, "", `${basePath}?item=${item.slug}`); };
  const closeItem = () => { setSelected(null); window.history.replaceState(null, "", basePath); };
  const moveSelection = (direction: -1 | 1) => { if (!selected) return; const index = items.findIndex((item) => item.slug === selected.slug); const next = items[(index + direction + items.length) % items.length]; if (next) openItem(next); };
  useEffect(() => { const slug = new URLSearchParams(window.location.search).get("item"); const item = archiveItems.find((entry) => entry.slug === slug); if (!item) return; const timer = window.setTimeout(() => setSelected(item), 0); return () => window.clearTimeout(timer); }, []);
  useEffect(() => { if (!selected) return; document.body.style.overflow = "hidden"; const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") closeItem(); if (event.key === "ArrowLeft") moveSelection(en?-1:1); if (event.key === "ArrowRight") moveSelection(en?1:-1); }; window.addEventListener("keydown", onKeyDown); return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKeyDown); }; });
  return <main className={en?"locale-en":"locale-fa"} lang={locale} dir={en?"ltr":"rtl"}><Header locale={locale}/><section className="page-hero archive-hero"><span className="label">{en?"Archive / Selected Outputs":"آرشیو / خروجی‌های منتخب"}</span><h1>{en?<>An archive of ideas.<br/><em>Each in its own frame.</em></>:<>آرشیو ایده‌ها.<br/><em>هرکدام در قاب خودش.</em></>}</h1><p>{en?"Videos play silently on repeat. Open any card for a larger view, project details, and sound controls.":"ویدئوها بی‌صدا و پیوسته پخش می‌شوند. برای نمایش بزرگ‌تر، اطلاعات پروژه و روشن‌کردن صدا روی کارت بزنید."}</p></section><section className="archive-section"><div className="archive-note"><span>{en?"Interactive Preview":"نمایش تصویر و ویدئو"}</span><p>{en?`${items.length} selected works.`:`${String(items.length).replace(/[0-9]/g,d=>"۰۱۲۳۴۵۶۷۸۹"[Number(d)])} اثر منتخب.`}</p></div><div className="filters" aria-label={en?"Archive filters":"فیلترهای آرشیو"}>{categories.map(category=><button className={filter===category.value?"active":""} onClick={()=>{setFilter(category.value);setGraphicFilter("All");}} key={category.value}>{en?category.en:category.fa}</button>)}</div>{filter === "Graphic Design" && <section className="graphic-collections" aria-label={en?"Graphic design collections":"مجموعه‌های طراحی گرافیک"}>
  <div className="filters graphic-subcategory-cards">{graphicSubcategories.map(category => <button type="button" aria-pressed={graphicFilter === category.value} className={graphicFilter === category.value ? "active" : ""} onClick={() => setGraphicFilter(category.value)} key={category.value}>{en?category.en:category.fa}</button>)}</div>
  <div className="graphic-results-heading"><h2>{en?graphicSubcategories.find(category=>category.value===graphicFilter)?.en:graphicSubcategories.find(category=>category.value===graphicFilter)?.fa}</h2><span>{en?`${items.length} works`:`${String(items.length).replace(/[0-9]/g,d=>"۰۱۲۳۴۵۶۷۸۹"[Number(d)])} اثر`}</span></div>
</section>}{items.length ? <div className={`archive-grid ${filter === "Graphic Design" ? "graphic-grid" : ""} ${filter === "Graphic Design" && graphicFilter === "Logo" ? "logo-grid" : ""}`}>{items.map(item=>{const title=en?(item.titleEn||item.title):item.title;const number=en?latinDigits(item.number):item.number;return <article className="archive-card" key={item.slug}><button className="archive-open" type="button" onClick={()=>openItem(item)} aria-label={`${en?"Open":"بازکردن"} ${title}`}><div className={`archive-media ${item.tone} media-${item.mediaType} ${item.subCategory === "Logo" ? "logo-frame" : ""} ${item.src && pngImageSources.has(item.src) ? "png-frame" : ""}`} style={{aspectRatio:item.subCategory === "Logo" ? "1 / 1" : ratios[item.slug]||item.ratio,backgroundImage:item.mediaType!=="video"&&item.poster?`url("${item.poster}")`:undefined}}><ArchiveMedia item={item} locale={locale} paused={selected?.slug === item.slug} playback={playback.current} onRatio={onRatio}/>{item.mediaType!=="abstract"&&<span className="media-badge">{item.mediaType==="video"?(en?"Play Video":"پخش ویدئو"):(en?"View Image":"نمایش تصویر")}</span>}</div><div className="archive-caption"><span><small>{number}</small>{title}</span><b>{en?(item.subCategory || item.typeEn):item.type}</b></div></button></article>})}</div> : <p className="archive-empty" role="status">{en?"No items in this category yet.":"هنوز نمونه‌ای در این دسته ثبت نشده است."}</p>} </section><ContactBand locale={locale}/><Footer locale={locale}/>{selected&&(()=>{const title=en?(selected.titleEn||selected.title):selected.title;const description=en?selected.descriptionEn:selected.description;const number=en?latinDigits(selected.number):selected.number;return <div className="lightbox" role="dialog" aria-modal="true" aria-label={title} onMouseDown={event=>event.target===event.currentTarget&&closeItem()}><div className="lightbox-shell"><div className="lightbox-topbar"><span>{number} / {title}</span><button type="button" onClick={closeItem} aria-label={en?"Close Preview":"بستن پیش‌نمایش"}>{en?"Close":"بستن"} <b>×</b></button></div><div className={`lightbox-media ${selected.tone} media-${selected.mediaType} ${selected.src && pngImageSources.has(selected.src) ? "png-frame" : ""}`} style={{aspectRatio:selected.mediaType === "image" ? undefined : ratios[selected.slug]||selected.ratio}}><ArchiveMedia key={selected.slug} item={selected} locale={locale} modal playback={playback.current} onRatio={onRatio}/></div><div className="lightbox-info"><div><span className="label">{en?"Selected Output":"خروجی منتخب"}</span><h2>{title}</h2><p>{description}</p></div><dl><div><dt>{en?"Project":"پروژه"}</dt><dd>{en?selected.project:selected.project.replace("Layer Studio / Self-initiated","لِیِر / پروژهٔ مستقل").replace("Layer Studio / Motion Test","لِیِر / تجربهٔ موشن").replace("Layer Studio Archive","آرشیو لِیِر")}</dd></div><div><dt>{en?"Year":"سال"}</dt><dd>{en?selected.year:selected.year.replace(/[0-9]/g,d=>"۰۱۲۳۴۵۶۷۸۹"[Number(d)])}</dd></div><div><dt>{en?"Role":"نقش"}</dt><dd>{en?selected.role:({"Art Direction, Graphic Design":"هدایت هنری، طراحی گرافیک","Creative Direction, Motion Design":"هدایت خلاق، طراحی موشن","Creative Production":"تولید خلاق"} as Record<string,string>)[selected.role]||selected.role}</dd></div><div><dt>{en?"Format":"قالب"}</dt><dd dir="ltr">{en?selected.format:({"Image · 4:3":"تصویر · ۴:۳","Video · MP4 · 9:16 Reel":"ویدئو · MP4 · ۹:۱۶","Preview Placeholder":"جایگاه نمونه"} as Record<string,string>)[selected.format]||selected.format}</dd></div></dl></div><div className="lightbox-nav"><button type="button" onClick={()=>moveSelection(-1)}>{en?"← Previous":"→ قبلی"}</button><span>{en?"Use arrow keys to navigate":"برای جابه‌جایی از کلیدهای جهت‌دار استفاده کنید"}</span><button type="button" onClick={()=>moveSelection(1)}>{en?"Next →":"بعدی ←"}</button></div></div></div>})()}</main>;
}
