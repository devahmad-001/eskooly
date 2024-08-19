"use client";
import React from "react";
import { spanAttributes } from "../../../../Type";
import styled from "@emotion/styled";

export default function Span(props: spanAttributes) {
  const SpanContainer = styled.span`
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

    @media screen and (max-width: 640px) {
      color: var(${props.color_Sm});
      font-size: ${props.fontSize_Sm};
      font-weight: ${props.fontWeight_Sm};
      text-decoration: ${props.TextDecoration_Sm};
      letter-spacing: ${props.letterSpacing_Sm};
      line-height: ${props.lineHeight_Sm};
      text-align: ${props.textAlign_Sm};
      background-color: var(${props.backgroundColor_Sm});
      border: ${props.border_Sm};
      border-radius: ${props.borderRadius_Sm};
      padding: ${props.padding_Sm};
      margin: ${props.margin_Sm};
      display: ${props.display_Sm};
      position: ${props.position_Sm};
      float: ${props.float_Sm};
      overflow: ${props.overflow_Sm};
    }

    @media screen and (min-width: 641px) and (max-width: 800px) {
      color: var(${props.color_Md});
      font-size: ${props.fontSize_Md};
      font-weight: ${props.fontWeight_Md};
      text-decoration: ${props.TextDecoration_Md};
      letter-spacing: ${props.letterSpacing_Md};
      line-height: ${props.lineHeight_Md};
      text-align: ${props.textAlign_Md};
      background-color: var(${props.backgroundColor_Md});
      border: ${props.border_Md};
      border-radius: ${props.borderRadius_Md};
      padding: ${props.padding_Md};
      margin: ${props.margin_Md};
      display: ${props.display_Md};
      position: ${props.position_Md};
      float: ${props.float_Md};
      overflow: ${props.overflow_Md};
    }

    @media screen and (min-width: 801px) {
      color: var(${props.color_Lg});
      font-size: ${props.fontSize_Lg};
      font-weight: ${props.fontWeight_Lg};
      text-decoration: ${props.TextDecoration_Lg};
      letter-spacing: ${props.letterSpacing_Lg};
      line-height: ${props.lineHeight_Lg};
      text-align: ${props.textAlign_Lg};
      background-color: var(${props.backgroundColor_Lg});
      border: ${props.border_Lg};
      border-radius: ${props.borderRadius_Lg};
      padding: ${props.padding_Lg};
      margin: ${props.margin_Lg};
      display: ${props.display_Lg};
      position: ${props.position_Lg};
      float: ${props.float_Lg};
      overflow: ${props.overflow_Lg};
    }
  `;
  return (
    <>
      <SpanContainer>{props.text}</SpanContainer>
    </>
  );
}
