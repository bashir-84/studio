import type { Metadata } from "next";
import { BrandsPage } from "@/components/brands-page";

export const metadata:Metadata={title:"Selected Brand Contexts | Layer Studio",description:"Brands connected to projects contributed to directly, through production teams, companies, and agencies."};
export default function Page(){return <BrandsPage locale="fa"/>;}
