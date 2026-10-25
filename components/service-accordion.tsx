"use client";

import { useState } from "react";
import { serviceDetails } from "@/lib/site-data";
import type { Locale } from "@/lib/i18n";

export function ServiceAccordion({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const en = locale === "en";
  const [open, setOpen] = useState(0);

  return (
    <div className={`service-accordion ${compact ? "is-compact" : ""}`}>
      {serviceDetails.map((service, index) => {
        const active = open === index;
        const title = en ? service.titleEn : service.titleFa;
        return (
          <article className={active ? "is-open" : ""} key={service.number}>
            <button type="button" onClick={() => setOpen(active ? -1 : index)} aria-expanded={active}>
              <span>{en ? service.number : service.numberFa}</span>
              <h3>{title}</h3>
              <p>{en ? service.summaryEn : service.summaryFa}</p>
              <b aria-hidden="true">{active ? "−" : "+"}</b>
            </button>
            <div className="service-panel" aria-hidden={!active}>
              <div className="service-image"><img src={service.image} alt="" loading="lazy"/></div>
              <div className="service-copy">
                <div><small>{en ? "This is for you if" : "برای چه کسی مناسب است؟"}</small><p>{en ? service.forEn : service.forFa}</p></div>
                <div><small>{en ? "Why this service" : "چرا این خدمت؟"}</small><p>{en ? service.valueEn : service.valueFa}</p></div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
