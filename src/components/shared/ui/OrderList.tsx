import React from "react";
import styled from "@emotion/styled";
import { orderlistAttributes } from "../../../../Type";
export default function OrderList(props: orderlistAttributes) {
  const List = styled.ol``;
  return (
    <>
      <List> {props.children}</List>
    </>
  );
}
