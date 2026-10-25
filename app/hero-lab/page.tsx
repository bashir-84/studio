import type { Metadata } from "next";
import { HeroLab } from "@/components/hero-lab";

export const metadata: Metadata = {
  title: "Hero Direction Lab | Layer Studio",
  description: "Three interactive, scroll-driven hero directions for Layer Studio.",
};

export default function HeroLabPage(){return <HeroLab/>}
