"use client";
import styled from "@emotion/styled";
import React from "react";
import { flexboxAttributes } from "../../../../Type";

export default function Box(props: flexboxAttributes) {
  const FlexBox = styled.div`
    min-width: ${props.minWidth};
    max-width: ${props.maxWidth};
    min-height: ${props.minHeight};
    max-height: ${props.maxHeight};
    border-left: ${props.borderLeft};
    border-right: ${props.borderRigth};
    border-top: ${props.borderTop};
    border-bottom: ${props.borderBottom};
    background-size: ${props.backgroundSize};
    background-repeat: ${props.backgroundRepeat};
    background-image: url(${props.backgroundImgURL});
    background-color: var(${props.backgroundColor});
    background: var(${props.background});
    position: ${props.position};
    padding: ${props.padding};
    width: ${props.width};
    height: ${props.height};
    column-gap: ${props.columnGap};
    row-gap: ${props.rowGap};
    display: ${props.display};
    flex-direction: ${props.flexDirection};
    align-items: ${props.alignItems};
    justify-content: ${props.justifyContent};
    gap: ${props.gap};
    align-self: ${props.alignSelf};
    flex-wrap: ${props.flexWrap};
    flex-grow: ${props.flexGrow};
    flex-shrink: ${props.flexShrink};
    flex-basis: ${props.flexBasis};
    order: ${props.order};

    @media screen and (max-width: 640px) {
      column-gap: ${props.columnGap_Sm};
      min-width: ${props.minWidth_Sm};
      max-width: ${props.maxWidth_Sm};
      min-height: ${props.minHeight_Sm};
      max-height: ${props.maxHeight_Sm};
      border-left: ${props.borderLeft_Sm};
      border-right: ${props.borderRigth_Sm};
      border-top: ${props.borderTop_Sm};
      border-bottom: ${props.borderBottom_Sm};
      background-size: ${props.backgroundSize_Sm};
      background-repeat: ${props.backgroundRepeat_Sm};
      background-image: url(${props.backgroundImgURL_Sm});
      background-color: var(${props.backgroundColor_Sm});
      background: var(${props.background_Sm});
      position: ${props.position_Sm};
      padding: ${props.padding_Sm};
      width: ${props.width_Sm};
      height: ${props.height_Sm};
      column-gap: ${props.columnGap_Sm};
      row-gap: ${props.rowGap_Sm};
      display: ${props.display_Sm};
      flex-direction: ${props.flexDirection_Sm};
      align-items: ${props.alignItems_Sm};
      justify-content: ${props.justifyContent_Sm};
      gap: ${props.gap_Sm};
      align-self: ${props.alignSelf_Sm};
      flex-wrap: ${props.flexWrap_Sm};
      flex-grow: ${props.flexGrow_Sm};
      flex-shrink: ${props.flexShrink_Sm};
      flex-basis: ${props.flexBasis_Sm};
      order: ${props.order_Sm};
    }

    @media screen and (min-width: 641px) and (max-width: 800px) {
      column-gap: ${props.columnGap_Md};
      min-width: ${props.minWidth_Md};
      max-width: ${props.maxWidth_Md};
      min-height: ${props.minHeight_Md};
      max-height: ${props.maxHeight_Md};
      border-left: ${props.borderLeft_Md};
      border-right: ${props.borderRigth_Md};
      border-top: ${props.borderTop_Md};
      border-bottom: ${props.borderBottom_Md};
      background-size: ${props.backgroundSize_Md};
      background-repeat: ${props.backgroundRepeat_Md};
      background-image: url(${props.backgroundImgURL_Md});
      background-color: var(${props.backgroundColor_Md});
      background: var(${props.background_Md});
      position: ${props.position_Md};
      padding: ${props.padding_Md};
      width: ${props.width_Md};
      height: ${props.height_Md};
      column-gap: ${props.columnGap_Md};
      row-gap: ${props.rowGap_Md};
      display: ${props.display_Md};
      flex-direction: ${props.flexDirection_Md};
      align-items: ${props.alignItems_Md};
      justify-content: ${props.justifyContent_Md};
      gap: ${props.gap_Md};
      align-self: ${props.alignSelf_Md};
      flex-wrap: ${props.flexWrap_Md};
      flex-grow: ${props.flexGrow_Md};
      flex-shrink: ${props.flexShrink_Md};
      flex-basis: ${props.flexBasis_Md};
      order: ${props.order_Md};
    }

    @media screen and (min-width: 801px) and (max-width: 1100px) {
      column-gap: ${props.columnGap_Lg};
      min-width: ${props.minWidth_Lg};
      max-width: ${props.maxWidth_Lg};
      min-height: ${props.minHeight_Lg};
      max-height: ${props.maxHeight_Lg};
      border-left: ${props.borderLeft_Lg};
      border-right: ${props.borderRigth_Lg};
      border-top: ${props.borderTop_Lg};
      border-bottom: ${props.borderBottom_Lg};
      background-size: ${props.backgroundSize_Lg};
      background-repeat: ${props.backgroundRepeat_Lg};
      background-image: url(${props.backgroundImgURL_Lg});
      background-color: var(${props.backgroundColor_Lg});
      background: var(${props.background_Lg});
      position: ${props.position_Lg};
      padding: ${props.padding_Lg};
      width: ${props.width_Lg};
      height: ${props.height_Lg};
      column-gap: ${props.columnGap_Lg};
      row-gap: ${props.rowGap_Lg};
      display: ${props.display_Lg};
      flex-direction: ${props.flexDirection_Lg};
      align-items: ${props.alignItems_Lg};
      justify-content: ${props.justifyContent_Lg};
      gap: ${props.gap_Lg};
      align-self: ${props.alignSelf_Lg};
      flex-wrap: ${props.flexWrap_Lg};
      flex-grow: ${props.flexGrow_Lg};
      flex-shrink: ${props.flexShrink_Lg};
      flex-basis: ${props.flexBasis_Lg};
      order: ${props.order_Lg};
    }
  `;
  return (
    <>
      <FlexBox>{props.children}</FlexBox>
    </>
  );
}
