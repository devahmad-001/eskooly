"use client";
import React from "react";
import styled from "@emotion/styled";
import { flexboxAttributes } from "../../../../Type";

export default function GradientBox(props:flexboxAttributes) {
  const GradientDiv = styled.div`
    background-image: conic-gradient(${props.gradient});
    width: ${props.width};
    height: ${props.height};
    position: ${props.position};
  `;
  return (
    <>
      <GradientDiv />
    </>
  );
}
