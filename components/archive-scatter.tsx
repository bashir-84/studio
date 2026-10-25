"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

const offsets=[[-86,-52,-10],[74,-68,12],[-120,42,-14],[96,55,9],[-36,98,-7],[112,8,15]];

function ScatterTile({offset,index,progress,href}:{offset:number[];index:number;progress:MotionValue<number>;href?:string}){
  const [x,y,r]=offset;
  const moveX=useTransform(progress,[0,.42,.62,1],[x,0,0,x*.58]);
  const moveY=useTransform(progress,[0,.42,.62,1],[y,0,0,-y*.52]);
  const rotate=useTransform(progress,[0,.42,.62,1],[r,0,0,-r*.75]);
  const scale=useTransform(progress,[0,.42,.62,1],[.78,1,1,.9]);
  const content=<>{String(index+1).padStart(2,"0")}<span>Archive</span></>;
  return href
    ? <motion.a aria-label={`Open archive — ${String(index+1).padStart(2,"0")}`} href={href} className={`archive-${index+1}`} style={{x:moveX,y:moveY,rotate,scale}}>{content}</motion.a>
    : <motion.i className={`archive-${index+1}`} style={{x:moveX,y:moveY,rotate,scale}}>{content}</motion.i>;
}

export function ArchiveScatter({href}:{href?:string}={}){
  const ref=useRef<HTMLDivElement>(null);
  const {scrollYProgress}=useScroll({target:ref,offset:["start end","end start"]});
  return <div className="mini-archive archive-scatter" ref={ref}>{offsets.map((offset,index)=><ScatterTile offset={offset} index={index} progress={scrollYProgress} href={href} key={index}/>)}</div>;
}
