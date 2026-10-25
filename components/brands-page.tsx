import { ContactBand, Footer, Header } from "@/components/site-chrome";
import { sitePath } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

const uploadedBrands=[
  {id:"bargavaran",name:"Bargavaran",logo:sitePath("/media/brands/logos/bargavaran.jpg")},
  {id:"dariusheshaghi9",name:"Dariush Eshaghi",logo:sitePath("/media/brands/logos/dariusheshaghi9.jpg")},
  {id:"deyhim_leadership_lab",name:"Deyhim Leadership Lab",logo:sitePath("/media/brands/logos/deyhim_leadership_lab.jpg")},
  {id:"kereshme_music_store",name:"Kereshme Music Store",logo:sitePath("/media/brands/logos/kereshme_music_store.jpg")},
  {id:"leva_kidsmusic",name:"Leva Kids Music",logo:sitePath("/media/brands/logos/leva_kidsmusic.jpg")},
  {id:"mohammadamin.santour",name:"Mohammadamin Santour",logo:sitePath("/media/brands/logos/mohammadamin.santour.jpg")},
  {id:"raahbarbranding",name:"Raahbar Branding",logo:sitePath("/media/brands/logos/raahbarbranding.jpg")},
  {id:"sanaz_musictrainingmethods",name:"Sanaz Music Training Methods",logo:sitePath("/media/brands/logos/sanaz_musictrainingmethods.jpg")},
  {id:"santoor_sepehr_afaghi",name:"Santoor Sepehr Afaghi",logo:sitePath("/media/brands/logos/santoor_sepehr_afaghi.jpg")},
  {id:"selinaland.ir",name:"Selina Land",logo:sitePath("/media/brands/logos/selinaland.ir.jpg")},
  {id:"shervin_akbari",name:"Shervin Akbari",logo:sitePath("/media/brands/logos/shervin_akbari.jpg")},
  {id:"the.location_",name:"The Location",logo:sitePath("/media/brands/logos/the.location_.jpg")},
];

const brandSlots=Array.from({length:20},(_,index)=>({
  number:String(index+1).padStart(2,"0"),
  id:uploadedBrands[index]?.id??`brand_${String(index+1).padStart(2,"0")}`,
  name:uploadedBrands[index]?.name??`Brand ${String(index+1).padStart(2,"0")}`,
  logo:uploadedBrands[index]?.logo??null,
}));

export function BrandsPage({locale}:{locale:Locale}){
  const en=locale==="en";
  return <main className={en?"locale-en":"locale-fa"} lang={locale} dir={en?"ltr":"rtl"}>
    <Header locale={locale}/>
    <section className="brands-hero">
      <div className="brands-kicker"><span>{en?"Selected Brand Contexts":"برندهای حاضر در پروژه‌ها"}</span><b>{en?"Project contribution · not a client list":"زمینهٔ حضور برندها در پروژه‌ها"}</b></div>
      <h1>{en?<>Brands present across<br/><em>contributed projects.</em></>:<>برندهایی در مسیر<br/><em>پروژه‌های مشترک.</em></>}</h1>
      <div className="brands-intro"><span>01 — 20</span><p>{en?"A selection of brands connected to projects I have contributed to—directly, as part of a production team, or through companies and agencies.":"مجموعه‌ای از برندهایی که در پروژه‌های مرتبط با آن‌ها نقش داشته‌ام؛ این نقش ممکن است مستقیم، به‌عنوان بخشی از تیم تولید، یا از طریق شرکت‌ها و آژانس‌ها انجام شده باشد."}</p></div>
    </section>
    <section className="brands-grid-section">
      <div className="brands-grid-head"><span>{en?"Selected contexts":"منتخب پروژه‌ها"}</span><b>{en?"20 logo positions":"۲۰ جایگاه برای نشان‌ها"}</b></div>
      <div className="brands-grid">{brandSlots.map((brand,index)=><article className="brand-slot" data-brand-slot={brand.number} style={{"--brand-delay":`${index*35}ms`} as React.CSSProperties} key={brand.number}><div className="brand-visual">{brand.logo?<img src={brand.logo} alt={`${brand.name} logo`}/>:<div className="brand-placeholder"><i/><strong>LOGO</strong></div>}</div><div className="brand-meta"><small>{brand.number}</small><div><span>{brand.name}</span><b>ID — {brand.id}</b></div></div></article>)}</div>
      <div className="brands-disclosure"><span>{en?"Context note":"توضیح همکاری"}</span><p>{en?"Brand names and marks remain the property of their respective owners. Their appearance here documents project context only and does not imply a direct client relationship, endorsement, or ongoing partnership with Layer Studio.":"نام‌ها و نشان‌های تجاری متعلق به صاحبان آن‌ها هستند. نمایش آن‌ها در این صفحه صرفاً برای توضیح زمینه پروژه‌هاست و الزاماً به معنی رابطهٔ مستقیم قراردادی، تأیید استودیو لِیِر از سوی برند یا همکاری جاری نیست."}</p></div>
    </section>
    <section className="brands-next"><span>{en?"Built behind the scenes":"نقش‌های مستقیم و پشت‌صحنه"}</span><h2>{en?<>Different arrangements.<br/>One standard of craft.</>:<>شکل‌های مختلف همکاری؛<br/>یک استاندارد مشترک در اجرا.</>}</h2><a href={sitePath(en?"/en/work":"/work")}>{en?"Explore Case Studies ↗":"مشاهده مطالعات موردی ←"}</a></section>
    <ContactBand locale={locale}/><Footer locale={locale}/>
  </main>;
}
