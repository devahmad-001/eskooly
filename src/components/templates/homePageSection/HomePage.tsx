import React from "react";
import Globe from "./globe/Globe";
import SchoolFeatures from "./featuress/schoolFeatures/SchoolFeatures";
import Facilities from "./facilities/Facilities";
import Allfeatures from "./featuress/allfeatures/AllFeatures";
import Management from "./managementSystem/Management";
import TrustedBrands from "./trustedBrands/TrustedBrands";
import Box from "@/components/shared/ui/FlexBox";

export default function HomePage() {
  return (
    <>
      <Box
        background="--gradient-darkblue"
        display="flex"
        flexDirection="column"
        flexWrap="wrap"
      >
        <Globe />
        <SchoolFeatures />
        <Facilities />
        <Allfeatures />
        <Management />
        <TrustedBrands />
      </Box>
    </>
  );
}
