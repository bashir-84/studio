# راهنمای افزودن مدیا به Archive

## 1. فایل را کجا بگذارم؟

برای هر خروجی یک پوشه با نام انگلیسی کوتاه بسازید:

```text
public/media/archive/project-name/
```

نمونه:

```text
public/media/archive/music-reel/video.mp4
public/media/archive/music-reel/poster.webp
public/media/archive/poster-series/cover.webp
```

نام فایل‌ها را با حروف کوچک انگلیسی، خط تیره و بدون فاصله بنویسید.

## 2. اندازهٔ پیشنهادی

| نوع محتوا | ratio در کد | اندازهٔ پیشنهادی |
|---|---:|---:|
| Instagram Reel | `9 / 16` | 1080×1920 |
| Portrait Post | `4 / 5` | 1080×1350 |
| Square | `1 / 1` | 1080×1080 |
| Landscape Video | `16 / 9` | 1920×1080 |
| Editorial Image | `4 / 3` | 1600×1200 |
| Photography | `3 / 2` | 1800×1200 |

## 3. چطور به Archive اضافه کنم؟

فایل `lib/site-data.ts` را باز کنید و یک آیتم مشابه نمونهٔ زیر به `demoArchiveItems` اضافه کنید:

```ts
{
  slug: "music-reel",
  number: "۰۳",
  type: "موشن‌گرافیک",
  tone: "archive-2",
  mediaType: "video",
  title: "عنوان فارسی پروژه",
  titleEn: "English Project Title",
  description: "توضیح کوتاه دربارهٔ خروجی و زمینهٔ ساخت آن.",
  project: "Project Name",
  year: "2026",
  role: "Creative Direction, Motion Design",
  format: "Video · MP4 · 9:16 Reel",
  src: "/media/archive/music-reel/video.mp4",
  poster: "/media/archive/music-reel/poster.webp",
  ratio: "9 / 16",
}
```

برای تصویر، `mediaType` را `image` بگذارید، `poster` را حذف کنید و مسیر تصویر را در `src` بنویسید.

## نکتهٔ اصلی

مقدار `ratio` باید با نسبت واقعی فایل یکسان باشد. Masonry Grid ارتفاع کارت را از همین مقدار می‌گیرد؛ بنابراین کارت Reel بلند، تصویر Landscape عریض و تصویر Square مربع نمایش داده می‌شود. خود مدیا در پنجرهٔ Preview بدون برش و در نسبت اصلی باز می‌شود.

برای ویدئو از MP4 با کدک H.264 و برای Poster و تصاویر از WebP استفاده کنید. بهتر است حجم ویدئوی Preview کمتر از 8MB باشد.
