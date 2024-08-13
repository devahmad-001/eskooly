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
        width="100vw"
        display="flex"
        flexWrap="wrap"
        padding="2.5rem 3rem 6rem 3rem"
        flexDirection="column"
        rowGap="2.2rem"
        backgroundColor=" #06183b"
        // backgroundColor="#0f5ef7"
        // background=" linear-gradient(to left, #0a3384, #06183b)"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
      >
        {/* PicBox */}
        {/* <Box></Box> */}
        <Box width="20vw" height="4rem" background=""></Box>
        {/* Heading */}
        <Box>
          <ParaGraph
            color="#fff"
            textAlign="center"
            fontSize="0.85rem"
            text="THAT'S NOT ALL"
            margin="0rem 0rem 1rem 0rem"
          />
          <Heading
            textAlign="center"
            text="All Features in one place"
            // padding="0.7rem 0rem"
            fontWeight="600"
            fontFamily={`Nexa Bold, sans-serif`}
            fontSize="2.3rem"
            color="#fff"
            lineHeight="1.125rem"
          />
        </Box>
        {/* Desckcription */}
        <AllFeaturesDeskcription />
      </Box>
    </>
  );
}
