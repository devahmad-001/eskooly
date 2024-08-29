"use client";
import styled from "@emotion/styled";
import React from "react";
import { iconbutton } from "../../../../Type";
import { MdPersonAddAlt } from "react-icons/md";

export default function IconBtn(props: iconbutton) {
  const Box = styled.a`
    outline: var(${props.outLine});
    max-width: ${props.maxWidth};
    height: ${props.height};
    border: ${props.border};
    box-shadow: ${props.boxShadow};
    outline: ${props.outLine};
    border-color: var(${props.borderColor});
    opacity: ${props.opacity};
    border-radius: ${props.borderRadius};
    padding: ${props.padding};
    color: var(${props.color});
    background: var(${props.background});
    background-color: var(${props.backgroundColor});
    border-width: ${props.borderWidth};
    cursor: ${props.cursor};
    justify-content: ${props.justifyContent};
    text-align: ${props.textAlign};
    white-space: ${props.whiteSpace};
    text-decoration: ${props.textDecoration};
    box-sizing: ${props.boxSizing};
    appearance: ${props.appearance};
    align-items: ${props.alignItems};
    display: ${props.displayflex};
    font-size: ${props.fontSize};
    height: ${props.heigth};
    line-height: ${props.lineHeight};
    position: ${props.position};
    vertical-align: ${props.verticalAlign};
    user-select: ${props.userSelect};
    transition: ${props.transition}; /* Apply transition to all properties */
    border-color: var(${props.borderColor});
    :hover {
      background: var(
        ${props.hoverBackground}
      ); /* Change background gradient on hover */
      box-shadow: var(${props.boxShadow}); /* Change shadow on hover */
      opacity: ${props.opacity};
    }

    @media screen and (max-width: 640px) {
      outline: var(${props.outLine_Sm});
      max-width: ${props.maxWidth_Sm};
      height: ${props.height_Sm};
      border: ${props.border_Sm};
      box-shadow: ${props.boxShadow_Sm};
      outline: ${props.outLine_Sm};
      border-color: var(${props.borderColor_Sm});
      opacity: ${props.opacity_Sm};
      border-radius: ${props.borderRadius_Sm};
      padding: ${props.padding_Sm};
      color: var(${props.color_Sm});
      background: ${props.background_Sm};
      background-color: var(${props.backgroundColor_Sm});
      border-width: ${props.borderWidth_Sm};
      cursor: ${props.cursor_Sm};
      justify-content: ${props.justifyContent_Sm};
      text-align: ${props.textAlign_Sm};
      white-space: ${props.whiteSpace_Sm};
      text-decoration: ${props.textDecoration_Sm};
      box-sizing: ${props.boxSizing_Sm};
      appearance: ${props.appearance_Sm};
      align-items: ${props.alignItems_Sm};
      display: ${props.displayflex_Sm};
      font-size: ${props.fontSize_Sm};
      height: ${props.heigth_Sm};
      line-height: ${props.lineHeight_Sm};
      position: ${props.position_Sm};
      vertical-align: ${props.verticalAlign_Sm};
      user-select: ${props.userSelect_Sm};
      transition: ${props.transition_Sm}; /* Apply transition to all properties */
      border-color: var(${props.borderColor_Sm});
      :hover {
        background: var(
          ${props.hoverBackground_Sm}
        ); /* Change background gradient on hover */
        box-shadow: var(${props.boxShadow_Sm}); /* Change shadow on hover */
        opacity: var(${props.opacity_Sm});
      }
    }

    @media screen and (min-width: 641px) and (max-width: 800px) {
      outline: var(${props.outLine_Md});
      max-width: ${props.maxWidth_Md};
      height: ${props.height_Md};
      border: ${props.border_Md};
      box-shadow: ${props.boxShadow_Md};
      outline: ${props.outLine_Md};
      border-color: var(${props.borderColor_Md});
      opacity: ${props.opacity_Md};
      border-radius: ${props.borderRadius_Md};
      padding: ${props.padding_Md};
      color: var(${props.color_Md});
      background: ${props.background_Md};
      background-color: var(${props.backgroundColor_Md});
      border-width: ${props.borderWidth_Md};
      cursor: ${props.cursor_Md};
      justify-content: ${props.justifyContent_Md};
      text-align: ${props.textAlign_Md};
      white-space: ${props.whiteSpace_Md};
      text-decoration: ${props.textDecoration_Md};
      box-sizing: ${props.boxSizing_Md};
      appearance: ${props.appearance_Md};
      align-items: ${props.alignItems_Md};
      display: ${props.displayflex_Md};
      font-size: ${props.fontSize_Md};
      height: ${props.heigth_Md};
      line-height: ${props.lineHeight_Md};
      position: ${props.position_Md};
      vertical-align: ${props.verticalAlign_Md};
      user-select: ${props.userSelect_Md};
      transition: ${props.transition_Md}; /* Apply transition to all properties */
      border-color: var(${props.borderColor_Md});
      :hover {
        background: var(
          ${props.hoverBackground_Md}
        ); /* Change background gradient on hover */
        box-shadow: var(${props.boxShadow_Md}); /* Change shadow on hover */
        opacity: var(${props.opacity_Md});
      }
    }

    @media screen and (min-width: 801px) {
      outline: var(${props.outLine_Lg});
      max-width: ${props.maxWidth_Lg};
      height: ${props.height_Lg};
      border: ${props.border_Lg};
      box-shadow: ${props.boxShadow_Lg};
      outline: ${props.outLine_Lg};
      border-color: var(${props.borderColor_Lg});
      opacity: ${props.opacity_Lg};
      border-radius: ${props.borderRadius_Lg};
      padding: ${props.padding_Lg};
      color: var(${props.color_Lg});
      background: ${props.background_Lg};
      background-color: var(${props.backgroundColor_Lg});
      border-width: ${props.borderWidth_Lg};
      cursor: ${props.cursor_Lg};
      justify-content: ${props.justifyContent_Lg};
      text-align: ${props.textAlign_Lg};
      white-space: ${props.whiteSpace_Lg};
      text-decoration: ${props.textDecoration_Lg};
      box-sizing: ${props.boxSizing_Lg};
      appearance: ${props.appearance_Lg};
      align-items: ${props.alignItems_Lg};
      display: ${props.displayflex_Lg};
      font-size: ${props.fontSize_Lg};
      height: ${props.heigth_Lg};
      line-height: ${props.lineHeight_Lg};
      position: ${props.position_Lg};
      vertical-align: ${props.verticalAlign_Lg};
      user-select: ${props.userSelect_Lg};
      transition: ${props.transition_Lg}; /* Apply transition to all properties */
      border-color: var(${props.borderColor_Lg});
      :hover {
        background: var(
          ${props.hoverBackground_Lg}
        ); /* Change background gradient on hover */
        box-shadow: var(${props.boxShadow_Lg}); /* Change shadow on hover */
        opacity: var(${props.opacity_Lg});
      }
    }
  `;

  const Info = styled.i`
    outline: rgb(255, 255, 255) none 0px;
    position: relative;
    top: 1px;
    padding-right: 8px;
    font-style: normal;
    font-weight: 400;
    text-transform: none;
    -webkit-font-smoothing: antialiased;
    font-family: iconsmind;
    font-variant: normal;
    box-sizing: border-box;
  `;

  return (
    <>
      <Box>
        <Info>
          <MdPersonAddAlt style={{ width: "20px", height: "30px" }} />
        </Info>{" "}
        {props.text}
      </Box>
    </>
  );
}
