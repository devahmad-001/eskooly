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
    color: var(${props.color});
    background: var(${props.background});
    background-color: var(${props.backgroundColor});
    border-color: var(${props.borderColor});
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
      background-color: var(${props.hoverBackgroundColor});
    }

    @media screen and (max-width: 640px) {
      width: ${props.width_Sm};
      max-width: ${props.maxWidth_Sm};
      min-width: ${props.minWidth_Sm};
      height: ${props.height_Sm};
      border: ${props.border_Sm};
      display: block;
      text-align: ${props.textAlign_Sm};
      border-radius: ${props.borderRadius_Sm};
      padding: ${props.padding_Sm};
      line-height: ${props.lineHeight_Sm};
      transition: ${props.transition_Sm};
      color: var(${props.color_Sm});
      background: var(${props.background_Sm});
      background-color: var(${props.backgroundColor_Sm});
      border-color: var(${props.borderColor_Sm});
      border-width: ${props.borderWidth_Sm};
      cursor: ${props.cursor_Sm};
      font-family: ${props.fontFamily_Sm};
      font-size: ${props.fontSize_Sm};
      box-sizing: ${props.boxSizing_Sm};
      box-shadow: ${props.boxShadow_Sm};
      margin: ${props.margin_Sm};
      position: ${props.position_Sm};
      :hover {
        transition: ${props.transition_Sm};
        background-color: var(${props.hoverBackgroundColor_Sm});
      }
    }

    @media screen and (min-width: 641px) and (max-width: 800px) {
      width: ${props.width_Md};
      max-width: ${props.maxWidth_Md};
      min-width: ${props.minWidth_Md};
      height: ${props.height_Md};
      border: ${props.border_Md};
      display: block;
      text-align: ${props.textAlign_Md};
      border-radius: ${props.borderRadius_Md};
      padding: ${props.padding_Md};
      line-height: ${props.lineHeight_Md};
      transition: ${props.transition_Md};
      color: var(${props.color_Md});
      background: var(${props.background_Md});
      background-color: var(${props.backgroundColor_Md});
      border-color: var(${props.borderColor_Md});
      border-width: ${props.borderWidth_Md};
      cursor: ${props.cursor_Md};
      font-family: ${props.fontFamily_Md};
      font-size: ${props.fontSize_Md};
      box-sizing: ${props.boxSizing_Md};
      box-shadow: ${props.boxShadow_Md};
      margin: ${props.margin_Md};
      position: ${props.position_Md};
      :hover {
        transition: ${props.transition_Md};
        background-color: var(${props.hoverBackgroundColor_Md});
      }
    }

    @media screen and (min-width: 801px) {
      width: ${props.width_Lg};
      max-width: ${props.maxWidth_Lg};
      min-width: ${props.minWidth_Lg};
      height: ${props.height_Lg};
      border: ${props.border_Lg};
      display: block;
      text-align: ${props.textAlign_Lg};
      border-radius: ${props.borderRadius_Lg};
      padding: ${props.padding_Lg};
      line-height: ${props.lineHeight_Lg};
      transition: ${props.transition_Lg};
      color: var(${props.color_Lg});
      background: var(${props.background_Lg});
      background-color: var(${props.backgroundColor_Lg});
      border-color: var(${props.borderColor_Lg});
      border-width: ${props.borderWidth_Lg};
      cursor: ${props.cursor_Lg};
      font-family: ${props.fontFamily_Lg};
      font-size: ${props.fontSize_Lg};
      box-sizing: ${props.boxSizing_Lg};
      box-shadow: ${props.boxShadow_Lg};
      margin: ${props.margin_Lg};
      position: ${props.position_Lg};
      :hover {
        transition: ${props.transition_Lg};
        background-color: var(${props.hoverBackgroundColor_Lg});
      }
    }
  `;
  return (
    <>
      <Btn>{props.text}</Btn>
    </>
  );
}
