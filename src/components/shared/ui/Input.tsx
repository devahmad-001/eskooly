"use client";
import styled from "@emotion/styled";
import React from "react";
import { inputAttributes } from "../../../../Type";

export default function Input(props: inputAttributes) {
  const InputBox = styled.input`
  color: var(${props.color});
  width: ${props.width};
  padding: ${props.padding};
  border:${props.border} ;
  border-color: var(${props.borderColor});
  border-radius: ${props.borderRadius};
  background-color: var(${props.backgroundColor});
  `;
  return (
    <>
      <InputBox type={props.type} placeholder={props.placeholder} />
    </>
  );
}
