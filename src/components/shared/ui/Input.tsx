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

  &:focus{
    outline: ${props.focusOutline};
    outline-offset: ${props.focusOutlineOffset};
    box-shadow: ${props.focusBoxShadow};
    border-color: ${props.focusBorderColor};
  }
  `;
  return (
    <>
      <InputBox type={props.type} placeholder={props.placeholder} />
    </>
  );
}
