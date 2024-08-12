import Box from "@/components/shared/ui/FlexBox";
import React from "react";
import Monitoring from "./monitoring/Monitoring";
import Portals from "./portals/Portals";
import Message from "./message/Message";

export default function WhyUsPage() {
  return (
    <>
      <Box
      padding="5rem 1rem"
     background="linear-gradient(to right,#09327f, #06183b)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        rowGap="3rem"
        width="100vw"
      >
        <Monitoring />
        <Portals />
        <Message/>
      </Box>
    </>
  );
}
