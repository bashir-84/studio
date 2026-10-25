"use client";

import { useEffect, useState } from "react";

const chapters = [
  {id:"info", fa:"Info", en:"Info"},
  {id:"approach", fa:"Approach", en:"Approach"},
  {id:"system", fa:"System", en:"System"},
  {id:"gallery", fa:"Gallery", en:"Gallery"},
];

export function CaseChapterRail({en=false}:{en?:boolean}){
  const [active,setActive]=useState("info");
  useEffect(()=>{
    const nodes=chapters.map(chapter=>document.getElementById(chapter.id)).filter(Boolean) as HTMLElement[];
    const observer=new IntersectionObserver(entries=>{
      const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(visible) setActive(visible.target.id);
    },{rootMargin:"-24% 0px -58%",threshold:[0,.2,.5]});
    nodes.forEach(node=>observer.observe(node));
    return()=>observer.disconnect();
  },[]);
  return <aside className="case-chapter-rail" aria-label={en?"Case study chapters":"فصل‌های مطالعهٔ موردی"}>
    <span>{en?"You are here":"الان اینجایید"}</span>
    <nav>{chapters.map((chapter,index)=><a className={active===chapter.id?"is-active":""} href={`#${chapter.id}`} key={chapter.id}><i>0{index+1}</i><b>{en?chapter.en:chapter.fa}</b></a>)}</nav>
  </aside>;
}
