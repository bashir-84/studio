import type { Metadata } from "next";
import { SpatialOrbitDemo } from "@/components/spatial-orbit-demo";

export const metadata: Metadata = {
  title: "Spatial Layer Orbit — Motion Demo | Layer Studio",
  description: "An interactive scroll-motion study for the Layer Studio home page.",
};

export default function OrbitDemoPage() {
  return <SpatialOrbitDemo />;
}
