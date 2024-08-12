"use client";
import React from "react";
import styled from "@emotion/styled";
import { btnAttributes } from "../../../../Type";

export default function Button(props: btnAttributes) {
  const Btn = styled.button`
    width: ${props.width};
    max-width: ${props.maxWidth};
    min-width: ${props.minWidth};
    height: ${props.height};
    border: ${props.border};
    display: block;
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
    font-size: ${props.fontSize};
    box-sizing: ${props.boxSizing};
    box-shadow: ${props.boxShadow};
    margin: ${props.margin};
    position: ${props.position};
    :hover {
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
