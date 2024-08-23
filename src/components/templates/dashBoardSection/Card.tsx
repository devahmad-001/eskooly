import Box from "@/components/shared/ui/FlexBox";
import React from "react";

export default function Card() {
  return (
    <>
      {/* <Box display="flex" justifyContent="center" alignContent="center"> */}
      <Box
        width="300px"
        height="300px"
        backgroundImgGradient={`conic-gradient(red,blue,red)`}
      ></Box>
      {/* </Box> */}
    </>
  );
}
