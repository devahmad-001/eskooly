import Box from "@/components/shared/ui/FlexBox";
import Img from "@/components/shared/ui/Img";
import React from "react";
import { trustBoxData } from "../../../../../Type";

export default function Sections() {
  return (
    <>
      <Box display="flex" flexWrap="wrap" padding="3rem 7rem " justifyContent="center" alignItems="center" >
        {trustBoxData.map((obj, index) => {
          return (
            <Box
             display="flex"
             alignItems="center"
             justifyContent="center"
              key={index}
              borderRigth={obj.borderRight ? "1px solid white" : "none"}
              width="10rem"
              height="7rem"
              borderBottom={obj.borderBottom ? "2px solid white" :"none"}
            >
             {
                obj.src &&  <Img src={obj.src} width="7rem" height="2rem" />
             }
            </Box>
          );
        })}
      </Box>
    </>
  );
}
