"use client";
import { sitePath } from "@/lib/i18n";

import { useEffect, useRef, useState } from "react";

export type TestimonialItem = {
  index: string;
  quote: string;
  name: string;
  project: string;
};

export function TestimonialCarousel({items, en = false}: {items: TestimonialItem[]; en?: boolean}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [step, setStep] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const update=()=>{
      const card=trackRef.current?.querySelector<HTMLElement>(".testimonial-card");
      if(card) setStep(card.getBoundingClientRect().width+18);
    };
    update();
    const observer=new ResizeObserver(update);
    if(viewportRef.current) observer.observe(viewportRef.current);
    return()=>observer.disconnect();
  },[]);

  useEffect(() => {
    if (paused || items.length < 2) return;
    const timer = window.setInterval(() => setActive(current => (current + 1) % items.length), 2800);
    return () => window.clearInterval(timer);
  }, [items.length, paused]);

  return <div className={`testimonial-carousel${en ? " is-en" : ""}`} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
    <div className="testimonial-viewport" ref={viewportRef}>
      <div className="testimonial-track" ref={trackRef} style={{transform:`translate3d(${(en?-1:1)*active*step}px,0,0)`}} aria-live="polite">
        {items.map((item, index) => <article className="testimonial-card" aria-hidden={index !== active} key={item.index}>
          <div className="testimonial-person">
            <img src={sitePath("/media/shared/project-profile-placeholder.webp")} alt=""/>
            <span><b>{item.name}</b><small>{item.project}</small></span>
            <em>{item.index}</em>
          </div>
          <blockquote>“{item.quote}”</blockquote>
        </article>)}
      </div>
    </div>
    <div className="testimonial-controls">
      <span>{en ? "Auto advancing · hover to pause" : "حرکت خودکار · برای توقف، نشانگر را روی کارت نگه دارید"}</span>
      <div>{items.map((item,index)=><button type="button" className={index===active?"is-active":""} onClick={()=>setActive(index)} aria-label={`${en?"View testimonial":"مشاهده نظر"} ${index+1}`} key={item.index}><i/></button>)}</div>
      <b>{String(active+1).padStart(2,"0")} / {String(items.length).padStart(2,"0")}</b>
    </div>
  </div>;
}
