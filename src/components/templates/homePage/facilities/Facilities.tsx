import Box from "@/components/shared/ui/FlexBox";
import React from "react";
import Portals from "./portals/Portals";
import FacilitiesComp from "./FacilitiesComp";
import WhyUs from "./whyUs/WhyUs";

export default function Facilities() {
  return (
    <>
      <Box
        padding="5rem 1rem"
        background=" linear-gradient(to left, #09327f, #06183b)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        rowGap="3rem"
        width="100vw"
      >
        <WhyUs/>
        <Portals />
        <FacilitiesComp />
      </Box>
    </>
  );
}
