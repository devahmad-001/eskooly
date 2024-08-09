"use client";
import React from "react";
import styled from "@emotion/styled";
import { btnAttributes } from "../../../../Type";

export default function Button(props: btnAttributes) {
  const Btn = styled.button`
    border: ${props.border};
    display: block;
    min-width: ${props.width};
    text-align: ${props.textAlign};
    border-radius: ${props.borderRadius};
    padding: ${props.padding};
    line-height: ${props.lineHeight};
    transition: ${props.transition};
    color: ${props.color};
    background: ${props.background};
    background-color: ${props.backgroundColor};
    border-color: ${props.borderColor};
    border-width: ${props.borderWidth};
    cursor: ${props.cursor};
    font-family: ${props.fontFamily};
    box-sizing: ${props.boxSizing};
    margin: ${props.margin};
    box-shadow: ${props.boxShadow};
    font-size: ${props.fontSize};
    height: ${props.height};
    position: ${props.position};
    :hover{
      transition: ${props.transition};
      background-color: ${props.hoverBackgroundColor};
    }
`;
  return (
    <>
      <Btn>{props.text}</Btn>
    </>
  );
}
