import Box from "@/components/shared/ui/FlexBox";
import React from "react";
import FacilitiesComp from "./FacilitiesComp";

export default function Facilities() {
  return (
    <>
      <Box
        padding="5rem 1rem"
        background="--gradient-darkblue"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        rowGap="3rem"
      >
        <FacilitiesComp />
      </Box>
    </>
  );
}
