"use client";
import React from "react";
import styled from "@emotion/styled";
import { imgAttributes } from "../../../../Type";

export default function Img(props: imgAttributes) {
  const Picture = styled.img`
    width: 100%;
    height: 100%;
    min-width: ${props.minWidth};
    min-height: ${props.minHeight};
    max-width: ${props.maxWidth};
    max-height: ${props.maxHeight};

    @media screen and (max-width: 640px) {
      min-width: ${props.minWidth_Sm};
      max-width: ${props.maxWidth_Sm};
      min-height: ${props.minHeight_Sm};
      max-height: ${props.maxHeight_Sm};
    }

    @media screen and (min-width: 641px) and (max-width: 800px) {
      min-width: ${props.minWidth_Md};
      max-width: ${props.maxWidth_Md};
      min-height: ${props.minHeight_Md};
      max-height: ${props.maxHeight_Md};
    }

    @media screen and (min-width: 801px) {
      min-width: ${props.minWidth_Lg};
      max-width: ${props.maxWidth_Lg};
      min-height: ${props.minHeight_Lg};
      max-height: ${props.maxHeight_Lg};
    }
  `;
  return (
    <>
      <Picture src={props.src} />
    </>
  );
}
