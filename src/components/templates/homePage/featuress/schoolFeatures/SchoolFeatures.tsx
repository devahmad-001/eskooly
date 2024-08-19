import Heading from "@/components/shared/ui/Heading";
import ParaGraph from "@/components/shared/ui/ParaGraph";
import React from "react";
import Box from "@/components/shared/ui/FlexBox";
import SchoolDescription from "./Description";

export default function SchoolFeatures() {
  return (
    <>
      <Box
        padding_Md="4rem 1rem"
        display="flex"
        flexWrap="wrap"
        padding="4rem 3rem"
        flexDirection="column"
        rowGap="4rem"
        backgroundColor="--light-blue"
        padding_Sm="2rem 0rem "
        rowGap_Sm="1rem"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          text="Features Of School Management Software"
          textAlign="center"
          padding="0.7rem 0rem"
          fontWeight="600"
          fontFamily={`Nexa Bold, sans-serif`}
          fontSize="2.3rem"
          fontSize_Md="1.6rem"
          fontSize_Sm="1.1rem"
          color=" --white"
          lineHeight="1.125rem"
          lineHeight_Md="2.5rem"
          lineHeight_Sm="2.5rem"
          padding_Sm="0"
        />

        <ParaGraph
          text="eSkooly is a complete and feature-rich school management software for all educational institutes. This school management software is for learning, administration, and management activities in schools, colleges, universities, tuition centers, or training centers. Our free school management system manages everything starting from admission to attendance and exams to result in cards."
          color="--white"
          textAlign="center"
          fontSize="1rem"
          padding_Sm="0rem 1.3rem"
        />
        <SchoolDescription />
      </Box>
    </>
  );
}
