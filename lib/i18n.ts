export type Locale = "fa" | "en";

export const isEnglish = (locale: Locale) => locale === "en";
export const latinDigits = (value: string) => value.replace(/[۰-۹]/g, d => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)));

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const sitePath = (path: string) => `${basePath}${path}`;

export function localePath(locale: Locale, path: string) {
  if (locale === "fa") return sitePath(path);
  if (path === "/") return sitePath("/en");
  return sitePath(`/en${path}`);
}

export function projectCopy<T extends Record<string, unknown>>(project: T, key: string, locale: Locale) {
  const localizedKey = locale === "en" ? `${key}En` : key;
  return project[localizedKey] as string;
}
