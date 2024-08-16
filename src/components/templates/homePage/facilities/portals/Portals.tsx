import Button from "@/components/shared/ui/Button";
import Box from "@/components/shared/ui/FlexBox";
import Heading from "@/components/shared/ui/Heading";
import Img from "@/components/shared/ui/Img";
import ParaGraph from "@/components/shared/ui/ParaGraph";
import React from "react";

export default function Portals() {
  return (
    <>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        rowGap="2rem"
        flexDirection="column"
      >
        <Box
          justifyContent="flex-start"
          alignItems="center"
          display="flex"
          rowGap="1rem"
          width="27%"
          flexDirection="column"
        >
          <Button
            color="--white"
            background="--gradient-lightblue"
            text="Manage User Roles"
            padding="0 0.6rem"
            lineHeight="2"
            height="2.1em"
            fontSize="1.1rem"
            borderRadius="2px"
            maxWidth="12rem"
            cursor="text"
          />
          <Heading
            textAlign="start"
            text="Separate Portals Available"
            fontWeight="600"
            fontFamily={`Nexa Bold, sans-serif`}
            fontSize="1.6rem"
            color="--white"
            lineHeight="normal"
          />
          <ParaGraph
            lineHeight="1.5"
            fontWeight="500"
            color="--white"
            textAlign="-webkit-center"
            fontSize="0.8rem"
            text="our school management system comes with a separate portal for every user role. An admin portal with full controls, separate portals for Management staff, Accountant, Teachers, Parents, and Students."
          />
        </Box>
        <Img width="566px" src="/imgs/whyUs/full-team.png" />
      </Box>
    </>
  );
}
