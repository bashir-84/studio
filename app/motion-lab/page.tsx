import type { Metadata } from "next";
import { MotionLab } from "@/components/motion-lab";

export const metadata:Metadata={
  title:"Scroll Narrative Lab | Layer Studio",
  description:"A scroll-driven storytelling demo for Layer Studio, inspired by contemporary digital studios.",
};

export default function MotionLabPage(){return <MotionLab/>;}
