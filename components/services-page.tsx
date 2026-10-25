import { Header, Footer, ContactBand } from "@/components/site-chrome";
import { ServiceAccordion } from "@/components/service-accordion";
import { type Locale } from "@/lib/i18n";

const processFa=[
  ["۰۱","شناخت","شناخت موضوع، مخاطب، محدودیت‌ها و آنچه باید در طول زمان حفظ شود."],
  ["۰۲","تعریف","تعریف استراتژی، ساختار محتوا، نقش‌ها و معیارهای یک خروجی منسجم."],
  ["۰۳","طراحی","طراحی زبان بصری، قالب‌های محتوا، عناصر قابل‌استفادهٔ مجدد و فرایند تولید."],
  ["۰۴","اجرا و توسعه","اجرا، بازبینی و بهترکردن سیستم براساس تجربهٔ واقعی انتشار."],
];
const processEn=[
  ["01","Discover","Understand the subject, audience, constraints, and what must remain consistent over time."],
  ["02","Define","Set the strategy, content structure, roles, and criteria for a coherent output."],
  ["03","Design","Build the visual language, formats, templates, and production workflow."],
  ["04","Deliver & Evolve","Produce, review, and improve the system through real publishing cycles."],
];

export function ServicesPage({locale}:{locale:Locale}){const en=locale==="en";const process=en?processEn:processFa;return <main className={en?"locale-en":"locale-fa"} lang={locale} dir={en?"ltr":"rtl"}><Header locale={locale}/><section className="page-hero services-hero"><span className="label">{en?"Services / Capabilities":"خدمات و تخصص‌ها"}</span><h1>{en?<>From raw knowledge<br/><em>to a working system.</em></>:<>از یک ایدهٔ خام<br/><em>تا یک سیستم زنده.</em></>}</h1><p>{en?"Layer Studio connects strategy, identity, video, motion, and publishing into one practical creative system built for long-term use.":"استودیو لِیِر، استراتژی، هویت، ویدئو، موشن و انتشار را در یک سیستم خلاق کاربردی و قابل‌استفاده در بلندمدت به هم متصل می‌کند."}</p></section><section className="services services-page"><div className="services-intro"><span className="label">{en?"Choose the problem":"مسئله را انتخاب کنید"}</span><p>{en?"Open a service to understand who it is for, what it changes, and the kind of system we build together.":"هر خدمت را باز کنید تا ببینید برای چه کسی مناسب است، چه چیزی را تغییر می‌دهد و چه سیستمی با هم می‌سازیم."}</p></div><ServiceAccordion locale={locale}/></section><section className="process-section"><div className="section-head"><div><span className="label">{en?"Process":"مسیر همکاری"}</span><h2>{en?<>Clear enough to repeat.<br/>Flexible enough to grow.</>:<>به‌اندازهٔ کافی روشن برای تکرار؛<br/>به‌اندازهٔ کافی منعطف برای رشد.</>}</h2></div><p>{en?"The process is systematic, but never generic. Every decision begins with the subject, audience, and real production conditions.":"مسیر همکاری منظم است و برای هر پروژه متناسب با موضوع، مخاطب و شرایط واقعی تولید طراحی می‌شود."}</p></div><div className="process-grid">{process.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section><section className="fit-section"><span className="label">{en?"A good fit":"برای چه پروژه‌هایی؟"}</span><div><h2>{en?"Built for work that needs to continue.":"برای کاری که باید ادامه پیدا کند."}</h2><p>{en?"The studio is best suited to educators, musicians, researchers, independent media projects, and specialist brands that need a repeatable content and production system—not a one-off visual deliverable.":"این همکاری برای مدرس‌ها، موسیقی‌دانان، پژوهشگران، رسانه‌های مستقل و برندهای تخصصی مناسب است که به محتوا و تولید تکرارپذیر نیاز دارند؛ نه فقط یک خروجی بصری مستقل."}</p></div></section><ContactBand locale={locale}/><Footer locale={locale}/></main>}
