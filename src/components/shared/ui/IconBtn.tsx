"use client";
import styled from "@emotion/styled";
import React from "react";
import { iconbutton } from "../../../../Type";
import { MdPersonAddAlt } from "react-icons/md";

export default function IconBtn(props: iconbutton) {
  const Box = styled.a`
    max-width: ${props.maxWidth};
    height: ${props.height};
    border: ${props.border};
    box-shadow: ${props.boxShadow};
    outline: ${props.outLine};
    border-color: ${props.borderColor};
    opacity: ${props.opacity};
    border-radius: ${props.borderRadius};
    padding: ${props.padding};
    color: ${props.color};
    background: ${props.background};
    background-color: ${props.backgroundColor};
    border-width: ${props.borderWidth};
    cursor: ${props.cursor};
    justify-content: ${props.justifyContent};
    text-align: ${props.textAlign};
    white-space: ${props.whiteSpace};
    text-decoration: ${props.textDecoration};
    box-sizing: ${props.boxSizing};
    appearance: ${props.appearance};
    align-items: ${props.alignItems};
    display: ${props.display};
    font-size: ${props.fontSize};
    height: ${props.heigth};
    line-height: ${props.lineHeight};
    position: ${props.position};
    vertical-align: ${props.verticalAlign};
    user-select: ${props.userSelect};
    transition: ${props.transition}; /* Apply transition to all properties */

    :hover {
      background: ${props.hoverBackground}; /* Change background gradient on hover */
      box-shadow: ${props.boxShadow}; /* Change shadow on hover */
      opacity: ${props.opacity};
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
          {/* {props.icon && React.createElement(props.icon, { style: { width: "20px", height: "30px" } })} */}
          <MdPersonAddAlt style={{ width: "20px", height: "30px" }} />
        </Info>{" "}
        {props.text}
      </Box>
    </>
  );
}
