import Heading from "@/components/shared/ui/Heading";
import ParaGraph from "@/components/shared/ui/ParaGraph";
import React from "react";
import Box from "@/components/shared/ui/FlexBox";
import SchoolDescription from "./Description";

export default function SchoolFeatures() {
  return (
    <>
      <Box
        // width="100vw"
        display="flex"
        flexWrap="wrap"
        padding="4rem 3rem"
        flexDirection="column"
        rowGap="4rem"
        backgroundColor="--light-blue"
      >
        <Heading
          text="Features Of School Management Software"
          textAlign="center"
          padding="0.7rem 0rem"
          fontWeight="600"
          fontFamily={`Nexa Bold, sans-serif`}
          fontSize="2.3rem"
          color=" --white"
          lineHeight="1.125rem"
        />
        <ParaGraph
          text="eSkooly is a complete and feature-rich school management software for all educational institutes. This school management software is for learning, administration, and management activities in schools, colleges, universities, tuition centers, or training centers. Our free school management system manages everything starting from admission to attendance and exams to result in cards."
          color="--white"
          textAlign="center"
          fontSize="1rem"
        />
        <SchoolDescription />
      </Box>
    </>
  );
}
