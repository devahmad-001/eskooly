"use client";

import Heading from "@/components/shared/ui/Heading";
import ParaGraph from "@/components/shared/ui/ParaGraph";
import Image from "next/image";
import styled from "styled-components";
import { featuresData } from "../../../../../Type";
import Box from "@/components/shared/ui/FlexBox";

export default function FeaturesDescription() {
  // const Container = styled.div`
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   width: 100vw;
  //   height: 100vh;
  // `;
  // const Box = styled.div`
  //   display: flex;
  //   width: 48rem;
  //   justify-content: space-between;
  // `;
  const DeskcriptionBox = styled.div`
  `;
  return (
    <>
      {/* <Container> */}
        {featuresData.map((obj, index) => {
          return (
            <Box width="31vw" 
            display="flex"
            flexDirection={obj.direction}
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center" 
              key={index}
            >
              <DeskcriptionBox>
                <Heading
                  text={obj.heading}
                  textAlign="center"
                  fontSize="1.7rem"
                  fontWeight="600"
                  padding="0.7rem 0rem"
                  fontFamily={`Nexa Bold, sans-serif`}
                />
                <ParaGraph
                  textAlign="center"
                  fontSize="0.8rem"
                  text={obj.para}
                />
              </DeskcriptionBox>
              <Image alt="" width={100} height={100} src={obj.gif} />
            </Box>
          );
        })}
      {/* </Container> */}
    </>
  );
}
