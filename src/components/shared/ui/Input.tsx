"use client";
import styled from "@emotion/styled";
import React from "react";
import { inputAttributes } from "../../../../Type";

export default function Input(props: inputAttributes) {
  const InputBox = styled.input`
  color: var(${props.color});
  `;
  return (
    <>
      <InputBox placeholder={props.placeholder}  />
    </>
  );
}
