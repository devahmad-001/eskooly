import Box from "@/components/shared/ui/FlexBox";
import Heading from "@/components/shared/ui/Heading";
import { StudentIcon } from "@/components/shared/ui/Icons";
import ParaGraph from "@/components/shared/ui/ParaGraph";
import React from "react";

export default function Card() {
  return (
    <>
      <Box
        position="absolute"
        width="260px"
        padding="25px 25px"
        borderRadius="1rem"
        backgroundColor="--red"
        height="160px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <ParaGraph
          textAlign="start"
          fontSize="medium"
          fontWeight="700"
          text="Total students"
        />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <StudentIcon color="--white" height="2.6rem" width="2.6rem" />
          <Heading text="0" fontSize="revert" fontWeight="700" />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding="0.25rem"
        >
          <ParaGraph text="This Month" />
          <ParaGraph text="0" />
        </Box>
      </Box>
    </>
  );
}
