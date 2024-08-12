"use client";
import React from "react";
import styled from "@emotion/styled";
import { paraGraphAttributes } from "../../../../Type";
export default function ParaGraph(props: paraGraphAttributes) {
  const Para = styled.p`
    line-height: ${props.lineHeight};
    position: ${props.position};
    text-decoration: ${props.TextDecoration};
    text-align: ${props.textAlign};
    font-family: ${props.fontFamily};
    font-weight: ${props.fontWeight};
    font-size: ${props.fontSize};
    background: ${props.background};
    margin: ${props.margin};
    padding: ${props.padding};
    width: ${props.width};
    min-width: ${props.minWidth};
    height: ${props.height};
    background-color: ${props.backgroundColor};
    color: ${props.color};
    line-height: ${props.lineHeight};
    vertical-align: ${props.verticalAlign};
  `;
  return (
    <>
      <Para>{props.text}</Para>
    </>
  );
}
