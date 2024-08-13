import Facilities from "@/components/templates/homePage/facilities/Facilities";
import Allfeatures from "@/components/templates/homePage/featuress/allfeatures/AllFeatures";
import SchoolFeatures from "@/components/templates/homePage/featuress/schoolFeatures/SchoolFeatures";
import { Globe } from "@/components/templates/homePage/globe/Globecanvas";
import Management from "@/components/templates/homePage/managementSystem/Management";
import Trust from "@/components/templates/homePage/trust/Trust";
import React from "react";
export default function Home() {
  return (
    <>
      <Globe />
      <SchoolFeatures />
      <Facilities />
      <Allfeatures />
      <Management />
      <Trust/>
    </>
  );
}
