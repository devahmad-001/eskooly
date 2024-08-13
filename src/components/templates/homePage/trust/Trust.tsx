import React from "react";
import Sections from "./TrustSections";
import Box from "@/components/shared/ui/FlexBox";
import ParaGraph from "@/components/shared/ui/ParaGraph";
import Heading from "@/components/shared/ui/Heading";
import Button from "@/components/shared/ui/Button";
import IconBtn from "@/components/shared/ui/IconBtn";

export default function Trust() {
  return (
    <>
      <Box
        display="flex"
        padding="3rem 0rem"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        background=" linear-gradient(to left, #06183b, #0a3489)"
      >
        <ParaGraph
          text="We build trust"
          fontWeight="500"
          color="#fff"
          textAlign="center"
          fontSize="0.82rem"
          lineHeight="1.3rem"
        />
        <Box display="flex" justifyContent="center" alignContent="center">
          <ParaGraph
            text="45K+ Schools"
            fontWeight="500"
            color="#fff"
            textAlign="start"
            fontSize="0.82rem"
            lineHeight="1.3rem"
          />
          <ParaGraph
            text="use our product."
            fontWeight="500"
            color="#fff"
            textAlign="start"
            fontSize="0.82rem"
            lineHeight="1.3rem"
          />
        </Box>
        <Heading />
        <Sections />
        <IconBtn
          text="Get started Now "
          maxWidth="12rem"
          border="none"
          boxShadow=" rgba(0, 0, 0, 0.42) 0px 14px 26px -12px, 
   rgba(0, 0, 0, 0.12) 0px 4px 23px 0px, rgba(0, 0, 0, 0.2) 0px 8px 10px -5px;"
          outLine=" rgb(255, 255, 255) none 0px"
          borderColor="rgb(255, 255, 255)"
          opacity="0.8"
          borderRadius="31.25rem"
          padding="1.375rem 2.3rem"
          color="rgb(255, 255, 255);"
          background=" linear-gradient(45deg, #0948c7, #316de4) !important"
          cursor="pointer"
          justifyContent="center"
          textAlign="center"
          borderWidth="0px"
          whiteSpace="nowrap"
          textDecoration="none solid rgb(255, 255, 255)"
          boxSizing="border-box"
          appearance="none"
          fontSize="0.813rem"
          height="2.9rem"
          alignItems="center"
          display="inline-flex"
          lineHeight="1.313rem"
          position="relative"
          verticalAlign="top"
          userSelect="none"
          transition="all 0.5s ease"
          hoverOpacity="1"
          hoverBoxShadow=" rgba(0, 0, 0, 0.6) 0rem 0.875rem 1.625rem -0.75rem,
     rgba(0, 0, 0, 0.15) 0px 4px 23px 0px,
     rgba(0, 0, 0, 0.3) 0px 8px 10px -5px"
          hoverBackground="linear-gradient(45deg, #3273f6, #2869ec) !important"
          icon="MdPersonAddAlt"
          backgroundColor="rgba(0, 0, 0, 0)"
        />
      </Box>
    </>
  );
}
