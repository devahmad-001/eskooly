"use client";
import React from "react";
import styled from "@emotion/styled";
import { paraGraphAttributes } from "../../../../Type";
export default function ParaGraph(props: paraGraphAttributes) {
  const Para = styled.p`
    border-bottom: ${props.borderBottom};
    line-height: ${props.lineHeight};
    position: ${props.position};
    text-decoration: ${props.TextDecoration};
    text-align: ${props.textAlign};
    font-family: ${props.fontFamily};
    font-weight: ${props.fontWeight};
    font-size: ${props.fontSize};
    background: var(${props.background});
    margin: ${props.margin};
    padding: ${props.padding};
    width: ${props.width};
    min-width: ${props.minWidth};
    height: ${props.height};
    background-color: var(${props.backgroundColor});
    color: var(${props.color});
    line-height: ${props.lineHeight};
    vertical-align: ${props.verticalAlign};
    :hover{
      border-bottom: ${props.hoverBorderBottom};
    }
    @media screen and (max-width: 640px) {
      line-height: ${props.lineHeight_Sm};
      position: ${props.position_Sm};
      text-decoration: ${props.TextDecoration_Sm};
      text-align: ${props.textAlign_Sm};
      font-family: ${props.fontFamily_Sm};
      font-weight: ${props.fontWeight_Sm};
      font-size: ${props.fontSize_Sm};
      background: var(${props.background_Sm});
      margin: ${props.margin_Sm};
      padding: ${props.padding_Sm};
      width: ${props.width_Sm};
      min-width: ${props.minWidth_Sm};
      height: ${props.height_Sm};
      background-color: var(${props.backgroundColor_Sm});
      color: var(${props.color_Sm});
      line-height: ${props.lineHeight_Sm};
      vertical-align: ${props.verticalAlign_Sm};
    }

    @media screen and (min-width: 641px) and (max-width: 800px) {
      line-height: ${props.lineHeight_Md};
      position: ${props.position_Md};
      text-decoration: ${props.TextDecoration_Md};
      text-align: ${props.textAlign_Md};
      font-family: ${props.fontFamily_Md};
      font-weight: ${props.fontWeight_Md};
      font-size: ${props.fontSize_Md};
      background: var(${props.background_Md});
      margin: ${props.margin_Md};
      padding: ${props.padding_Md};
      width: ${props.width_Md};
      min-width: ${props.minWidth_Md};
      height: ${props.height_Md};
      background-color: var(${props.backgroundColor_Md});
      color: var(${props.color_Md});
      line-height: ${props.lineHeight_Md};
      vertical-align: ${props.verticalAlign_Md};
    }

    @media screen and (min-width: 801px) {
      line-height: ${props.lineHeight_Lg};
      position: ${props.position_Lg};
      text-decoration: ${props.TextDecoration_Lg};
      text-align: ${props.textAlign_Lg};
      font-family: ${props.fontFamily_Lg};
      font-weight: ${props.fontWeight_Lg};
      font-size: ${props.fontSize_Lg};
      background: var(${props.background_Lg});
      margin: ${props.margin_Lg};
      padding: ${props.padding_Lg};
      width: ${props.width_Lg};
      min-width: ${props.minWidth_Lg};
      height: ${props.height_Lg};
      background-color: var(${props.backgroundColor_Lg});
      color: var(${props.color_Lg});
      line-height: ${props.lineHeight_Lg};
      vertical-align: ${props.verticalAlign_Lg};
    }
  `;
  return (
    <>
      <Para>{props.text}</Para>
    </>
  );
}
