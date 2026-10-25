import { sitePath } from "@/lib/i18n";
import { graphicArchiveItems } from "./archive-graphics";
export type Project = {
  slug: string;
  index: string;
  title: string;
  sector: string;
  summary: string;
  services: string[];
  challenge: string;
  system: string;
  outcome: string;
  duration: string;
  accent: string;
  titleEn: string;
  sectorEn: string;
  summaryEn: string;
  servicesEn: string[];
  challengeEn: string;
  systemEn: string;
  outcomeEn: string;
  durationEn: string;
  profileImage: string;
  heroImage?: string;
  outputImages?: string[];
};

export const projects: Project[] = [
  {
    slug: "daryoush-eshaghi",
    index: "۰۱",
    title: "داریوش اسحاقی",
    sector: "آموزش",
    summary: "تبدیل چهل سال تجربه آموزش تمبک به یک سیستم منظم و تکرارپذیر برای یادگیری ویدئویی در یوتیوب و اینستاگرام.",
    services: ["سیستم محتوایی", "طراحی آموزشی", "هویت بصری"],
    challenge: "چهار جلد محتوای آموزشی و چند دهه تجربه وجود داشت، اما برای انتقال این دانش به نسل تازه هنرجویان، مسیر دیجیتال روشن و منسجمی طراحی نشده بود.",
    system: "برنامه‌ای ماژولار، قالب ثابت ضبط، زبان بصری مشخص و ریتم انتشار منظم طراحی شد تا یک مجموعه عمیق آموزشی به مسیری قابل‌فهم و قابل‌ادامه تبدیل شود.",
    outcome: "آرشیوی آموزشی و روبه‌رشد که روش تدریس را حفظ می‌کند و در عین حال، یافتن، فهمیدن و ادامه‌دادن هر درس را برای هنرجو ساده‌تر می‌سازد.",
    duration: "همکاری بلندمدت",
    accent: "ochre",
    titleEn: "Daryoush Eshaghi",
    sectorEn: "Education",
    summaryEn: "Turning four volumes of a forty-year tombak curriculum into a structured, repeatable video-learning system.",
    servicesEn: ["Content Systems", "Educational Design", "Visual Identity"],
    challengeEn: "Four volumes of teaching material and decades of experience already existed, but there was no clear digital path for passing that knowledge to a new generation of students.",
    systemEn: "We developed a modular curriculum, a consistent recording format, a defined visual language, and a repeatable publishing rhythm that could make a deep body of knowledge easy to follow and continue.",
    outcomeEn: "A growing educational archive that preserves the teaching method while making every lesson easier to discover, understand, and continue.",
    durationEn: "Long-term collaboration",
    profileImage: sitePath("/media/shared/project-profile-placeholder.webp"),
  },
  {
    slug: "podcast-azadi",
    index: "۰۲",
    title: "پادکست آزادی",
    sector: "رسانه مستقل",
    summary: "پروژه‌ای پنج‌ساله برای تحلیل موسیقی؛ از نخستین ضبط با تلفن همراه تا شکل‌گیری یک سیستم کامل تولید ویدئوکست.",
    services: ["تولید بلندمدت", "ویدئو و موشن", "طراحی فرمت"],
    challenge: "پروژه با تجهیزات محدود، بدون فرمت تثبیت‌شده و با هدفی بزرگ آغاز شد: گفت‌وگویی جدی درباره موسیقی که هم جذاب باشد و هم امکان تداوم داشته باشد.",
    system: "فرمت سردبیری، جریان همکاری با مهمان، زبان موشن، خط تولید و ساختار انتشار در چرخه‌های پی‌درپی طراحی، اجرا و بازنگری شد.",
    outcome: "یک رسانه مستقل و انعطاف‌پذیر که توانست فرمت خود را تغییر دهد، کیفیت تولید را ارتقا دهد و به‌مرور صدایی قابل‌تشخیص پیدا کند.",
    duration: "۵ سال",
    accent: "ink",
    titleEn: "Podcast Azadi",
    sectorEn: "Independent Media",
    summaryEn: "A five-year music-analysis project—from a first mobile-phone recording to a complete video-podcast production system.",
    servicesEn: ["Long-term Production", "Video & Motion", "Format Design"],
    challengeEn: "The project began with limited equipment, no established format, and an ambitious goal: creating serious conversations about music that remained engaging and sustainable.",
    systemEn: "An editorial format, guest workflow, motion language, production pipeline, and publishing structure were designed through repeated cycles of making, reviewing, and improving.",
    outcomeEn: "An independent, adaptable media platform that evolved its format, raised its production quality, and developed a recognizable voice over time.",
    durationEn: "5 years",
    profileImage: sitePath("/media/work/podcast-azadi/profile.jpg"),
    heroImage: sitePath("/media/work/podcast-azadi/hero.jpg"),
    outputImages: [
      sitePath("/media/work/podcast-azadi/output-01.jpg"),
      sitePath("/media/work/podcast-azadi/output-02.jpg"),
      sitePath("/media/work/podcast-azadi/output-03.jpg"),
      sitePath("/media/work/podcast-azadi/output-04.jpg"),
    ],
  },
  {
    slug: "sanaz-eshaghi",
    index: "۰۳",
    title: "ساناز اسحاقی",
    sector: "پژوهش",
    summary: "تبدیل پژوهش دانشگاهی درباره روش‌های بین‌المللی آموزش موسیقی به مجموعه‌ای ویدئویی، روشن، دقیق و قابل‌استفاده.",
    services: ["طراحی یادگیری", "محتوای پژوهش‌محور", "ویدئو"],
    challenge: "محتوای متراکم دانشگاهی باید بدون از دست‌دادن منابع، ظرافت علمی و اعتبار خود، برای روایت تصویری و مخاطب آنلاین بازطراحی می‌شد.",
    system: "روشی پژوهش‌محور برای نگارش و توضیح تصویری شکل گرفت که منابع، مفاهیم و مثال‌ها را در قسمت‌هایی منسجم و قابل‌دنبال‌کردن سازمان می‌داد.",
    outcome: "فرمتی آموزشی که هم به دقت موضوع تخصصی وفادار است و هم با ظرفیت توجه مخاطب عمومی در فضای آنلاین هماهنگ شده است.",
    duration: "تولید مجموعه",
    accent: "violet",
    titleEn: "Sanaz Eshaghi",
    sectorEn: "Research",
    summaryEn: "Translating academic research on international music-education methods into a clear, rigorous, and useful video series.",
    servicesEn: ["Learning Design", "Research-led Content", "Video Production"],
    challengeEn: "Dense academic material had to become a visual narrative without losing its sources, scientific nuance, or credibility.",
    systemEn: "A research-led writing and visual-explanation method organized sources, concepts, and examples into coherent episodes that viewers could follow.",
    outcomeEn: "An educational format that remains faithful to a specialist subject while respecting the attention patterns of a broader online audience.",
    durationEn: "Series production",
    profileImage: sitePath("/media/shared/project-profile-placeholder.webp"),
  },
  {
    slug: "shervin-akbari",
    index: "۰۴",
    title: "شروین اکبری",
    sector: "برند آموزشی",
    summary: "ساخت یک برند آموزشی امروزی پیرامون رویکرد متفاوت یک مدرس تمبک در آموزش موسیقی.",
    services: ["استراتژی محتوا", "طراحی فرمت", "هدایت بصری"],
    challenge: "یک روش تدریس متمایز به زبان و فرمت محتوایی قابل‌تشخیصی نیاز داشت تا تفاوت خود را سریع، دقیق و بدون کلیشه منتقل کند.",
    system: "استراتژی محتوایی متمرکز، فرمت‌های تکرارشونده، قواعد بصری و ریتم سردبیری براساس لحن طبیعی و شیوه تدریس مدرس طراحی شد.",
    outcome: "هویتی آموزشی و روشن که می‌تواند در پلتفرم‌های مختلف رشد کند، بدون آنکه صدای ویژه خود را از دست بدهد یا به محتوایی عمومی تبدیل شود.",
    duration: "سیستم در حال توسعه",
    accent: "coral",
    titleEn: "Shervin Akbari",
    sectorEn: "Education Brand",
    summaryEn: "Building a contemporary education brand around a distinctive approach to teaching tombak and musical thinking.",
    servicesEn: ["Content Strategy", "Format Design", "Visual Direction"],
    challengeEn: "A distinctive teaching method needed an equally recognizable content language—one that communicated its difference quickly and without cliché.",
    systemEn: "A focused content strategy, repeatable formats, visual rules, and an editorial rhythm were built around the instructor’s natural voice and teaching style.",
    outcomeEn: "A clear educational identity designed to grow across platforms without losing the voice that makes the teaching approach distinctive.",
    durationEn: "System in development",
    profileImage: sitePath("/media/shared/project-profile-placeholder.webp"),
  },
  {
    slug: "kereshme",
    index: "۰۵",
    title: "فروشگاه موسیقی کرشمه",
    sector: "خرده‌فروشی",
    summary: "طراحی یک سیستم محتوایی مقیاس‌پذیر برای یوتیوب فروشگاه موسیقی؛ سیستمی که پیش از فروش، اعتماد می‌سازد.",
    services: ["سیستم برند", "تولید تیمی", "استراتژی یوتیوب"],
    challenge: "معرفی صرفِ محصولات نمی‌توانست برای خرید آگاهانه ساز، تخصص و اعتمادی را ایجاد کند که مخاطب به آن نیاز داشت.",
    system: "مدلی آموزشی برای انتشار، هویتی بصری یکپارچه، نقش‌های تکرارپذیر تولید و فرمت‌هایی کاربردی برای پاسخ‌دادن به پرسش‌های واقعی مشتریان طراحی شد.",
    outcome: "حضوری محتوایی که فروشگاه را نه فقط به‌عنوان یک کاتالوگ، بلکه به‌عنوان راهنمایی آگاه و قابل‌اعتماد معرفی می‌کند.",
    duration: "تولید بلندمدت",
    accent: "forest",
    titleEn: "Kereshme Music Store",
    sectorEn: "Retail",
    summaryEn: "A scalable YouTube content system for a music retailer—designed to build trust before asking for a sale.",
    servicesEn: ["Brand Systems", "Team Production", "YouTube Strategy"],
    challengeEn: "Product listings alone could not create the expertise and trust a customer needs when choosing a musical instrument.",
    systemEn: "An educational publishing model, unified visual identity, repeatable production roles, and practical formats were designed around real customer questions.",
    outcomeEn: "A content presence that positions the store as an informed guide rather than simply a catalogue of products.",
    durationEn: "Long-term production",
    profileImage: sitePath("/media/shared/project-profile-placeholder.webp"),
  },
  {
    slug: "sepehr-afaghi",
    index: "۰۶",
    title: "سپهر آفاقی",
    sector: "هویت هنرمند",
    summary: "طراحی هویتی دیجیتال و یکپارچه برای سازنده و نوازنده سنتور در اینستاگرام، یوتیوب و آپارات.",
    services: ["هویت بصری", "هنرمند مستقل", "سیستم چندپلتفرمی"],
    challenge: "سازسازی، نوازندگی و دانش آموزشی در پلتفرم‌های مختلف به‌شکل فعالیت‌هایی جدا از هم دیده می‌شدند.",
    system: "یک سیستم بصری و سردبیری واحد، مهارت ساخت، اجرا و دانش تخصصی را به هم پیوند داد و در عین حال با قالب هر پلتفرم سازگار شد.",
    outcome: "حضوری دیجیتال و منسجم که دامنه کامل فعالیت هنرمند را قابل‌دیدن می‌کند و هویتی به‌یادماندنی می‌سازد.",
    duration: "طراحی سیستم هویت",
    accent: "blue",
    titleEn: "Sepehr Afaghi",
    sectorEn: "Artist Identity",
    summaryEn: "Creating a coherent digital identity for a santur maker and performer across Instagram, YouTube, and Aparat.",
    servicesEn: ["Visual Identity", "Independent Artist", "Multi-platform System"],
    challengeEn: "Instrument making, performance, and specialist knowledge appeared as separate activities across different platforms.",
    systemEn: "A shared visual and editorial system connected craft, performance, and expertise while adapting to the native format of each platform.",
    outcomeEn: "A coherent digital presence that makes the artist’s full practice visible and builds a recognizable identity around it.",
    durationEn: "Identity system design",
    profileImage: sitePath("/media/shared/project-profile-placeholder.webp"),
  },
];

export type ServiceDetail = {
  number: string;
  numberFa: string;
  titleEn: string;
  titleFa: string;
  summaryEn: string;
  summaryFa: string;
  forEn: string;
  forFa: string;
  valueEn: string;
  valueFa: string;
  image: string;
};

export const serviceDetails: ServiceDetail[] = [
  {
    number: "01", numberFa: "۰۱", titleEn: "Content Systems Design", titleFa: "طراحی سیستم‌های محتوا",
    summaryEn: "Turn scattered ideas into a system that keeps producing.",
    summaryFa: "یک ساختار تکرارپذیر برای برنامه‌ریزی، تولید، بازبینی و انتشار محتوا؛ بدون اینکه هر هفته همه‌چیز را از صفر شروع کنید.",
    forEn: "For educators, musicians, researchers, and small teams with valuable knowledge but an inconsistent publishing process.",
    forFa: "مناسب مدرس‌ها، موسیقی‌دان‌ها، پژوهشگران و تیم‌های کوچکی که دانش ارزشمند دارند اما انتشارشان پراکنده و فرسایشی است.",
    valueEn: "Choose this when the real problem is not a lack of ideas, but the absence of formats, roles, templates, and a sustainable rhythm.",
    valueFa: "اگر ایده دارید اما برای تولید و انتشار به قالب‌های مشخص، تقسیم نقش‌ها و نظمی پایدار نیاز دارید، از اینجا شروع کنیم.",
    image: sitePath("/media/services/service-content-system.webp"),
  },
  {
    number: "02", numberFa: "۰۲", titleEn: "Visual Identity & Brand Systems", titleFa: "هویت بصری و سیستم‌های برند",
    summaryEn: "Make everything you publish feel like it comes from the same world.",
    summaryFa: "یک زبان بصری منسجم برای اینکه محتوای شما در همهٔ رسانه‌ها هویتی آشنا و قابل‌تشخیص داشته باشد.",
    forEn: "For expert-led brands and cultural projects that have substance, but look different every time they publish.",
    forFa: "مناسب برندهای تخصصی و پروژه‌های فرهنگی که محتوای جدی دارند، اما هر بار با ظاهری متفاوت و بدون انسجام منتشر می‌شوند.",
    valueEn: "Choose this when recognition, consistency, and practical templates matter more than a logo delivered in isolation.",
    valueFa: "وقتی شناخته‌شدن، انسجام و قالب‌های کاربردی مهم‌تر از تحویل یک نشان مستقل هستند، به سیستم برند نیاز دارید.",
    image: sitePath("/media/services/service-brand-system.webp"),
  },
  {
    number: "03", numberFa: "۰۳", titleEn: "Video Production & Motion", titleFa: "تولید ویدئو و موشن",
    summaryEn: "Turn ideas worth sharing into videos worth watching.",
    summaryFa: "تدوین، موشن و پس‌تولید روایت‌محور برای اینکه ایده‌های پیچیده، روشن، دیدنی و به‌یادماندنی شوند.",
    forEn: "For courses, interviews, podcasts, artist projects, and specialist content that needs more than clean cuts and effects.",
    forFa: "برای دوره‌ها، مصاحبه‌ها، پادکست‌ها و پروژه‌های هنری و تخصصی که روایت، ریتم و بیان بصری در آن‌ها نقش اصلی را دارند.",
    valueEn: "Choose this when pacing, visual explanation, sound, and motion must work together in service of the subject.",
    valueFa: "وقتی ریتم، توضیح بصری، صدا و موشن باید هم‌زمان در خدمت موضوع باشند، این خدمت انتخاب درستی است.",
    image: sitePath("/media/services/service-video-motion.webp"),
  },
  {
    number: "04", numberFa: "۰۴", titleEn: "Educational Content Design", titleFa: "طراحی محتوای آموزشی",
    summaryEn: "Turn what you know into something others can actually learn from.",
    summaryFa: "تبدیل کتاب، پژوهش و سال‌ها تجربهٔ تدریس به یک مسیر یادگیری روشن و سازگار با توجه مخاطب دیجیتال.",
    forEn: "For educators and subject-matter experts who know what to teach, but need help structuring how people understand and continue.",
    forFa: "برای مدرسان و متخصصانی که موضوع آموزش را می‌شناسند و می‌خواهند مسیر فهم و پیشرفت مخاطب را روشن‌تر طراحی کنند.",
    valueEn: "Choose this when accuracy must be preserved while lessons become easier to follow, produce, and scale.",
    valueFa: "برای طراحی درس‌هایی که دقت علمی را حفظ می‌کنند، راحت‌تر دنبال می‌شوند و فرایند تولید و توسعهٔ آن‌ها روشن است.",
    image: sitePath("/media/services/service-educational-design.webp"),
  },
];

export const services = serviceDetails.map(service => [service.numberFa, service.titleFa, service.summaryFa]);
export const servicesEn = serviceDetails.map(service => [service.number, service.titleEn, service.summaryEn]);

const faDigits = (value: number) => String(value).padStart(2, "0").replace(/[0-9]/g, d => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

export type ArchiveItem = {
  slug: string;
  number: string;
  type: string;
  typeEn: string;
  tone: string;
  mediaType: "image" | "video" | "abstract";
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn: string;
  project: string;
  year: string;
  role: string;
  format: string;
  src?: string;
  previewSrc?: string;
  poster?: string;
  subCategory?: string;
  featured?: boolean;
  ratio: string;
};

const driveVideos = [
  ["AK2.mp4", "1bno0Mj947-o9eSRNnJtCU4VV4ID6V7wh", "9 / 16"],
  ["Barg-200K_2.mp4", "1RzRFS-s8YpwzgTVe4xd6oVrvzqxpn44Z", "9 / 16"],
  ["BH-20251023-IG-V1-025_3.mp4", "1sk9bLjDxdpg3JPMVNsepOrVulwuxAxPr", "9 / 16"],
  ["deep mast_3.mp4", "12uIxK4jzJJm7JUuDkm912M8zh3TKnBAi", "9 / 16"],
  ["humo burger-opening.mp4", "1bLIIVJBTHMNVlh6XJIInWzRQLxezVByV", "9 / 16"],
  ["JG 59_2.mp4", "13CXqe2rv5hrcmgvg7_H3UwArEGGXxCTX", "9 / 16"],
  ["JG-97 .mp4", "1DI32p6BZC-cpX7n9D7LNjeTxkpmYdkbK", "9 / 16"],
  ["Location Based Service.mp4", "1Ireu3ZMF85S7v2OXJyuad8wo-4hSAcFJ", "16 / 9"],
  ["RAH-81.mp4", "138LjlEe-aM9GPpOarA4BsaOLHT73_dO7", "9 / 16"],
  ["RAH-81(2).mp4", "1HS3CEGu6vNBF0p5CGyuo3zNFOTy5um9h", "9 / 16"],
  ["RAH-81(3).mp4", "10NXg2LlvtVKhQURt6dYsXAZ_jMtNPsuX", "9 / 16"],
  ["Recafe Num1 .mp4", "1qseAyL2QhF1TIKWvUP9Ailxgs0x9I1vm", "9 / 16"],
  ["Sequence 01_1 (3).mp4", "1f2-rfijil3DbHirWlSyAnLOjkumweTx-", "9 / 16"],
  ["SZ-118.mp4", "1gY6qClsFH1efmG7H5_EluEuf8lXjoMLC", "9 / 16"],
  ["tonbak .mp4", "1tM-wus_K18cFORxLEBelPmB37bgysbgp", "9 / 16"],
  ["TRV-20251110-IG-V1-013.mp4", "1RzFzPoXd6c_5Nx0-OGYO6bkzWOxoQxmO", "9 / 16"],
  ["trvizyon-_4.mp4", "1QJtkSaX4va8IUplfUhAH3KWXIi15stj_", "9 / 16"],
  ["دوئت 4.mp4", "1EK_rJfOtfu6CVbcfmf19LYEbiN2nVVIg", "9 / 16"],
] as const;

const motionDesignVideos = [
  ["deja vu_5.mp4", "1RQ4AhWl3grdwSnPgV8tAfCek8gHsH5px", "9 / 16"],
  ["SL 2 tv.mp4", "16kAv9kMskvlq0jnba6yi9HjrX2qGiAxH", "16 / 9"],
  ["SL reel .mp4", "1zPD-K_G8MfQViKT-2k5fjYLw9bbX8drU", "9 / 16"],
  ["نیتروتو.mp4", "1EJBocZoQ2yNeY-8JMaXIeQuyK0d0MD0y", "9 / 16"],
] as const;

const logoMotionVideos = [
  ["Radman Law Logo Motion.mp4", "1TWroJ7xf9mSyvosvqaI8cdb62fYoy8mu"],
  ["2Ms-N EN.mp4", "1aod3Wn8mGw5jNLaIbXqfHKTDjFKPABEK"],
  ["3BashirAmri logo.mp4", "1WCEDtYXt44aGtJd44ETOWpIihzCa56if"],
  ["4MOtion_2.mp4", "1yPkG_wN4EAAO6L3aRZ66ejWUb-JUeQpH"],
  ["5DS B logo 2.mp4", "1qpuG9DPiA2clCoIEE06kxJbtutJfV3Qe"],
  ["6MS logo motion W.mp4", "1bjkbPHTmiTwLPSAeki5h-W2Kd44nbFL_"],
  ["7MS logo motion.mp4", "1qHy2sFD6g_hJDnUzsZk3RS3shEJkUpwN"],
  ["8SL logo motion.mp4", "11G6bo1TjtAr-yEKTLw3DZX7fbi8CVVQt"],
  ["9DEYHIM logo motion.mp4", "1G7o6s53duvUezCSasXGIZC0m35RvKc41"],
  ["10bashir amri Logo Motion.mp4", "1KH3B4NEq4eWXbu4H8V9jHQkpwZgv7U_7"],
  ["11darush eshaghi Logo motion.mp4", "1Wt_zZBr4C2SxI2DjjZP6UJzEV6BGFLqL"],
  ["12HK logo .mp4", "1gckLvNzH_5kz2SZkc-FVcd1vqAb9EcC4"],
] as const;

function makeDriveItems(records: ReadonlyArray<readonly [string, string, string?]>, category: "Video Editing" | "Motion Design" | "Logo Motion", numberOffset = 0): ArchiveItem[] {
  return records.map(([filename, id, ratio = "9 / 16"], i) => {
    const slugPrefix = category === "Logo Motion" ? "logo-motion" : category === "Motion Design" ? "motion-design" : "drive-video";
    const slug = `${slugPrefix}-${i + 1}`;
    const thumbnail = `https://drive.google.com/thumbnail?id=${id}&sz=w640`;
    const categoryFa = category === "Logo Motion" ? "لوگو موشن" : category === "Motion Design" ? "طراحی موشن" : "تدوین ویدئو";
    const description = category === "Logo Motion" ? "نمونه‌ای از پروژه‌های لوگوموشن لِیِر." : category === "Motion Design" ? "نمونه‌ای از پروژه‌های طراحی موشن لِیِر." : "ویدئویی از آرشیو تدوین لِیِر.";
    return {
      slug,
      number: faDigits(i + 1 + numberOffset),
      type: categoryFa,
      typeEn: category,
      tone: `archive-${(i % 7) + 1}`,
      mediaType: "video",
      title: filename.replace(/\.mp4$/i, ""),
      titleEn: filename.replace(/\.mp4$/i, ""),
      description,
      descriptionEn: category === "Logo Motion" ? "A logo motion piece from the Layer archive." : category === "Motion Design" ? "A motion design piece from the Layer archive." : "A video from the Layer editing archive.",
      project: "Layer Studio Archive",
      year: "2025",
      role: category,
      format: "Video · MP4",
      src: `https://royal-bar-6010.bashiramri84.workers.dev/video?id=${id}`,
      previewSrc: `https://royal-bar-6010.bashiramri84.workers.dev/preview?id=${id}`,
      poster: thumbnail,
      ratio,
    };
  });
}

export const archiveItems: ArchiveItem[] = [
  ...makeDriveItems(driveVideos, "Video Editing"),
  ...makeDriveItems(motionDesignVideos, "Motion Design", driveVideos.length),
  ...makeDriveItems(logoMotionVideos, "Logo Motion", driveVideos.length + motionDesignVideos.length),
  ...graphicArchiveItems.map((item, index) => ({...item, number: faDigits(35 + index)})),
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
