"use client";

import Heading from "@/components/shared/ui/Heading";
import ParaGraph from "@/components/shared/ui/ParaGraph";
import Image from "next/image";
import styled from "styled-components";
import { featuresData } from "../../../../../Type";
import { useState } from "react";

export default function FeaturesDescription() {
  let [align, setAlign] = useState("row");
  featuresData.map((data)=>{
    if(data.id ==="odd"){
      align="row-reverse"
    }else{
       align="row"
    }
    setAlign(align);
  })
  const Box = styled.div`
    display: flex;
    flex-direction: ${align};
  `;
  const DeskcriptionBox = styled.div`
    max-width: 40vw;
    justify-content: center;
    align-items: center;
  `;
  return (
    <>
      {featuresData.map((obj, index) => {
        return (
          <Box key={index}>
            <DeskcriptionBox>
              <Heading
                text={obj.heading}
                textAlign="center"
                fontSize="1.7rem"
                fontWeight="600"
                padding="0.7rem 0rem"
                fontFamily={`Nexa Bold, sans-serif`}
              />
              <ParaGraph textAlign="center" fontSize="0.8rem" text={obj.para} />
            </DeskcriptionBox>
            <Image alt="" width={100} height={100} src={obj.gif} />
          </Box>
        );
      })}
    </>
  );
}
