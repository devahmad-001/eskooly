import React from "react";
import AllFeaturesDeskcription from "./Deskcription";
import Heading from "@/components/shared/ui/Heading";
import ParaGraph from "@/components/shared/ui/ParaGraph";
import Box from "@/components/shared/ui/FlexBox";

export default function Allfeatures() {
  return (
    <>
      {/* Container */}
      <Box
        backgroundImgURL="/imgs/allfeatures/feature-back.png"
        display="flex"
        flexWrap="wrap"
        padding="9rem 3rem 6rem 3rem"
        flexDirection="column"
        rowGap="4rem"
        backgroundColor=" --dark-Navyblue"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
      >
        <Box>
          <ParaGraph
            text="THAT'S NOT ALL"
            color="--white"
            textAlign="center"
            fontSize="0.85rem"
            margin="0rem 0rem 1rem 0rem"
          />
          <Heading
            text="All Features in one place"
            textAlign="center"
            fontWeight="600"
            fontFamily={`Nexa Bold, sans-serif`}
            fontSize="2.3rem"
            color="--white"
            lineHeight="2.125rem"
          />
        </Box>
        {/* Desckcription */}
        <AllFeaturesDeskcription />
      </Box>
    </>
  );
}
