import Box from "@/components/shared/ui/FlexBox";
import Img from "@/components/shared/ui/Img";
import React from "react";
import { trustBoxData } from "../../../../../Type";

export default function Sections() {
  return (
    <>
      <Box
        display="flex"
        flexWrap="wrap"
        padding="3rem 7rem "
        padding_Sm="2rem"
        flexDirection_Sm="column"
        justifyContent="center"
        alignItems="center"
        rowGap_Sm="2rem"
      >
        {trustBoxData.map((obj, index) => {
          return (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              key={index}
              borderRigth={obj.borderRight ? "1px solid white" : "none"}
              maxWidth="10rem"
              maxHeight="7rem"
              borderBottom={obj.borderBottom ? "2px solid white" : "none"}
              borderRigth_Sm="none"
              
              
            >
              {obj.src && <Img src={obj.src} minWidth="8rem" minHeight="4rem" />}
            </Box>
          );
        })}
      </Box>
    </>
  );
}
