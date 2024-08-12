"use client";
import React from "react";
import { headingAttributes } from "../../../../Type";
import styled from "@emotion/styled";
export default function Heading(props: headingAttributes) {
  const Headings = styled.h1`
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
      <Headings>{props.text}</Headings>
    </>
  );
}
