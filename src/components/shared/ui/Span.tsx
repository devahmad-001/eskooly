"use client";
import React from "react";
import { spanAttributes } from "../../../../Type";
import styled from "@emotion/styled";

export default function Span(props: spanAttributes) {
  const Inline = styled.span`
    color: var(${props.color});
    font-size: ${props.fontSize};
    font-weight: ${props.fontWeight};
    text-decoration: ${props.TextDecoration};
    letter-spacing: ${props.letterSpacing};
    line-height: ${props.lineHeight};
    text-align: ${props.textAlign};
    background-color: var(${props.backgroundColor});
    border: ${props.border};
    border-radius: ${props.borderRadius};
    padding: ${props.padding};
    margin: ${props.margin};
    display: ${props.display};
    position: ${props.position};
    float: ${props.float};
    overflow: ${props.overflow};
  `;
  return (
    <>
      <Inline>{props.text}</Inline>
    </>
  );
}
