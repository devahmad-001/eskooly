"use client";
import styled from "@emotion/styled";
import React from "react";
import { flexboxAttributes } from "../../../../Type";

export default function Box(props: flexboxAttributes) {
  const FlexBox = styled.div`
    border-left: ${props.borderLeft};
    border-right: ${props.borderRigth};
    border-top: ${props.borderTop};
    border-bottom: ${props.borderBottom};
    background-size: ${props.backgroundSize};
    background-repeat: ${props.backgroundRepeat};
    background-image: url(${props.backgroundImgURL});
    position: ${props.position};
    padding: ${props.padding};
    background: ${props.background};
    width: ${props.width};
    height: ${props.height};
    background-color: ${props.backgroundColor};
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
    /* @media screen and (min-width: 768px) {
      flex-direction: column;
      row-gap: 4rem;
    } */
  `;
  return (
    <>
      <FlexBox>{props.children}</FlexBox>
    </>
  );
}
