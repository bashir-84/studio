"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

const sections = [
  { id: "top", en: "Home", fa: "خانه" },
  { id: "services", en: "Four Layers", fa: "چهار لایه" },
  { id: "case-studies", en: "Case Studies", fa: "مطالعات موردی" },
  { id: "archive", en: "Archive", fa: "Archive" },
  { id: "studio", en: "Studio", fa: "Studio" },
  { id: "contact", en: "Contact", fa: "Contact" },
] as const;

export function HomeProgressNav({ locale }: { locale: Locale }) {
  const [activeId, setActiveId] = useState("top");
  const en = locale === "en";

  useEffect(() => {
    const updateActive = () => {
      const point = window.innerHeight * 0.42;
      const current = sections.find((item) => {
        const section = document.getElementById(item.id);
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= point && rect.bottom > point;
      });
      if (current) setActiveId(current.id);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  return (
    <nav className="home-progress-nav" aria-label={en ? "Page sections" : "بخش‌های صفحه"}>
      {sections.map((item, index) => {
        const active = item.id === activeId;
        const label = en ? item.en : item.fa;
        return (
          <div className="home-progress-item" key={item.id}>
            <button
              type="button"
              className={active ? "home-progress-dot is-active" : "home-progress-dot"}
              aria-label={label}
              aria-current={active ? "location" : undefined}
              onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
            >
              <span className="home-progress-tooltip">{label}</span>
              {active && <span className="home-progress-label">{label}</span>}
            </button>
            {index < sections.length - 1 && <i className="home-progress-connector" aria-hidden="true" />}
          </div>
        );
      })}
    </nav>
  );
}
