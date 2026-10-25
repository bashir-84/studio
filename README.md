# Layer Studio — نسخهٔ آمادهٔ GitHub Pages

این بسته شامل کد کامل نسخهٔ فعلی سایت است: صفحهٔ اصلی، صفحات فارسی و انگلیسی، مطالعات موردی، خدمات، برندها، تماس و آرشیو قابل فیلتر. GitHub Actions پس از هر بار ارسال کد به شاخهٔ `main`، خروجی ایستا را می‌سازد و منتشر می‌کند.

## انتشار در گیت‌هاب

1. یک مخزن **خالی** در GitHub بسازید. نام دلخواه است؛ سیستم مسیر مخزن را خودکار تشخیص می‌دهد.
2. **محتویات این ZIP** را در ریشهٔ مخزن آپلود کنید؛ خود پوشهٔ بیرونی را آپلود نکنید. پوشهٔ `.github` هم باید همراه فایل‌ها باشد.
3. شاخهٔ پیش‌فرض را `main` قرار دهید.
4. در مخزن به **Settings → Pages → Build and deployment → Source** بروید و **GitHub Actions** را انتخاب کنید.
5. در تب **Actions** پایان موفق گردش‌کار `Deploy Layer Studio to GitHub Pages` را ببینید. سایت در `https://USERNAME.github.io/REPOSITORY/` باز می‌شود. اگر نام مخزن `USERNAME.github.io` باشد، آدرس ریشهٔ همان دامنه است.

برای آپلود از رایانه با Git:

```bash
git init
git add .
git commit -m "Publish Layer Studio"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

## اجرا و ویرایش محلی

به Node.js نسخهٔ ۲۲ یا بالاتر نیاز دارید.

```bash
npm ci
npm run dev
```

اطلاعات پروژه‌ها و آرشیو در `lib/site-data.ts` و `lib/archive-graphics.ts` است. ظاهر در `app/*.css` و محتوای صفحات در `components/` قرار دارد.

برای ساخت خروجی ایستا در ریشهٔ دامنه:

```bash
npm run build:pages
```

خروجی در `out/` قرار می‌گیرد. این پوشه را داخل مخزن آپلود نکنید؛ گردش‌کار آن را خودکار می‌سازد.

## ویدئوها و تصاویر

فایل‌های ثابت و فونت‌ها در `public/` قرار دارند. تصاویر آرشیو گرافیک از Google Drive بارگیری می‌شوند. ویدئوهای آرشیو همچنان از Cloudflare Worker موجود در `lib/site-data.ts` دریافت می‌شوند؛ بنابراین خود GitHub Pages میزبان ویدئوها نیست. برای پخش ویدئوها، Worker باید فعال باشد و فایل‌های Drive دسترسی لازم را داشته باشند. دامنهٔ GitHub Pages باید در تنظیمات CORS Worker مجاز باشد؛ اگر Worker از `Access-Control-Allow-Origin: *` استفاده می‌کند، تغییر اضافی لازم نیست.

آدرس Worker فعلی: `https://royal-bar-6010.bashiramri84.workers.dev`

این بسته هیچ رمز، توکن یا فایل ویدئوی کپی‌شده‌ای ندارد.
