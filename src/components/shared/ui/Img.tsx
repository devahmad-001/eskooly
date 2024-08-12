"use client";
import React from "react";
import styled from "@emotion/styled";
import { imgAttributes } from "../../../../Type";

export default function Img(props: imgAttributes) {
  const Picture = styled.img`
    width: ${props.width};
    height: ${props.height};
  `;
  return (
    <>
      <Picture src={props.src} />
    </>
  );
}
