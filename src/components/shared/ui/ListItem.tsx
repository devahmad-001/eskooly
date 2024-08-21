
import React from "react";
import styled from "@emotion/styled";
import { listitemAttributes } from "../../../../Type";
export default function ListItem(props:listitemAttributes) {
  const LiItem = styled.ol``;
  return (
    <>
      <LiItem>
        {props.children}
      </LiItem>
    </>
  );
}
