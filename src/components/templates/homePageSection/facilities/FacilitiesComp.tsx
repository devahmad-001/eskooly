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
              maxWidth="70vw"
              justifyContent="space-between"
              flexDirection={obj.direction}
              alignItems="center"
              height="100%"
            >
              <Box
                justifyContent="flex-start"
                alignItems={obj.align}
                display="flex"
                rowGap="1.2rem"
                maxWidth="42%"
                flexDirection="column"
              >
                <Button
                  cursor="text"
                  background=" --gradient-lightblue"
                  text={obj.btnText}
                  padding="0 0.6rem"
                  lineHeight="2"
                  height="2.1em"
                  fontSize="1.04rem"
                  borderRadius="0.125rem"
                  maxWidth="10.5rem"
                  color="--white"
                />
                <Heading
                  textAlign="start"
                  text={obj.heading}
                  fontWeight="600"
                  fontFamily={`Nexa Bold, sans-serif`}
                  fontSize="1.6rem"
                  color="--white"
                  lineHeight="normal"
                />
                <ParaGraph
                  lineHeight="1.7"
                  fontWeight="500"
                  color="--white"
                  textAlign={obj.align ? "center" : "start"}
                  fontSize="0.8rem"
                  text={obj.details}
                />
                {obj.display != "none" && (
                  <IconBtn
                    color="--white"
                    cursor="pointer"
                    displaybtn={obj.display}
                    text={obj.btnText}
                    maxWidth="12rem"
                    border="none"
                    outLine=" --white none 0px"
                    borderColor=" --dark-pink"
                    opacity="0.8"
                    borderRadius="31.25rem"
                    padding="1.375rem 2.3rem"
                    background=" --light-pink"
                    justifyContent="center"
                    textAlign="center"
                    borderWidth="0px"
                    whiteSpace="nowrap"
                    boxSizing="border-box"
                    appearance="none"
                    fontSize="0.813rem"
                    height="2.9rem"
                    alignItems="center"
                    displayflex="inline-flex"
                    lineHeight="1.313rem"
                    position="relative"
                    verticalAlign="top"
                    userSelect="none"
                    // transition="all 0.5s ease"
                    hoverOpacity="1"
                    hoverBackground=" --dark-pink"
                    icon="MdPersonAddAlt"
                  />
                )}
              </Box>
              <Img maxHeight={obj.height} maxWidth={obj.width} src={obj.src} />
            </Box>
          );
        })}
      </Box>
    </>
  );
}
