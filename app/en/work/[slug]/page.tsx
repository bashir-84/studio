import { projects } from "@/lib/site-data";

export function generateStaticParams() { return projects.map(({slug}) => ({slug})); }

import { CaseStudyPage } from "@/components/case-study-page";
export default async function EnglishCaseStudy({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <CaseStudyPage slug={slug} locale="en"/>}
