import React from "react";
import Button from "../../../shared/ui/Button";
import Box from "../../../shared/ui/FlexBox";
import Heading from "../../../shared/ui/Heading";
import ParaGraph from "../../../shared/ui/ParaGraph";
import Img from "../../../shared/ui/Img";
import IconBtn from "@/components/shared/ui/IconBtn";
import { facilitiesData } from "../../../../../Type";
export default function FacilitiesComp() {
  return (
    <>
      <Box display="flex" flexDirection="column" rowGap="6rem">
        {facilitiesData.map((obj, index) => {
          return (
            <Box
              key={index}
              display="flex"
              justify-content="center"
              columnGap="4.5rem"
              width="100%"
              justifyContent="center"
              flexDirection={obj.direction}
              alignItems="center"
              height="100%"
            >
              <Box
                justifyContent="flex-start"
                display="flex"
                rowGap="1.2rem"
                width="31.5%"
                flexDirection="column"
              >
                <Button
                  background="linear-gradient(45deg, #0f5ef7, #0f5ef7) !important"
                  text={obj.btnText}
                  padding="0 0.6rem"
                  lineHeight="2"
                  height="2.1em"
                  fontSize="1.04rem"
                  borderRadius="0.125rem"
                  maxWidth="10.5rem"
                />
                <Heading
                  textAlign="start"
                  text={obj.heading}
                  fontWeight="600"
                  fontFamily={`Nexa Bold, sans-serif`}
                  fontSize="1.6rem"
                  color="#fff"
                  lineHeight="normal"
                />
                <ParaGraph
                  lineHeight="1.7"
                  fontWeight="500"
                  color="#fff"
                  textAlign="start"
                  fontSize="0.8rem"
                  text={obj.details}
                />
                {obj.display != "none" && (
                  <IconBtn
                    display={obj.display}
                    maxWidth="12rem"
                    text={obj.iconBtnText}
                    border="none"
                    boxShadow=" rgba(0, 0, 0, 0.42) 0px 14px 26px -12px, 
   rgba(0, 0, 0, 0.12) 0px 4px 23px 0px, rgba(0, 0, 0, 0.2) 0px 8px 10px -5px;"
                    outLine=" rgb(255, 255, 255) none 0px"
                    borderColor="rgb(255, 255, 255)"
                    opacity="0.8"
                    borderRadius="31.25rem"
                    padding="1.375rem 2.3rem"
                    color="rgb(255, 255, 255);"
                    background="rgba(0, 0, 0, 0)
  linear-gradient(45deg, rgb(255, 128, 139), rgb(247, 144, 153)) repeat
  scroll 0% 0% / auto padding-box border-box;"
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
                    lineHeight="1.313rem"
                    position="relative"
                    verticalAlign="top"
                    userSelect="none"
                    transition="all 0.5s ease"
                    hoverOpacity="1"
                    hoverBoxShadow=" rgba(0, 0, 0, 0.6) 0rem 0.875rem 1.625rem -0.75rem,
     rgba(0, 0, 0, 0.15) 0px 4px 23px 0px,
     rgba(0, 0, 0, 0.3) 0px 8px 10px -5px"
                    hoverBackground="rgba(0, 0, 0, 0)
     linear-gradient(45deg, rgb(244, 125, 135), rgb(235, 115, 125)) repeat
     scroll 0% 0% / auto padding-box border-box"
                    icon="MdPersonAddAlt"
                    backgroundColor="rgba(0, 0, 0, 0)"
                  />
                )}
              </Box>
              <Img height={obj.height} width={obj.width} src={obj.src} />
            </Box>
          );
        })}
      </Box>
    </>
  );
}
