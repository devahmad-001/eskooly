import React from "react";
import styled from "@emotion/styled/macro";
import { btnAttributes } from "../../../../Type";

const Btn = styled.button`
  border: none;
  display: block;
  width: 100% !important;
  text-align: center;
  border-radius: 500px;
  padding: 22px 40px;
  line-height: 0px;
  transition: all 0.5s ease 0s;
  color: rgb(255, 255, 255);
  background: rgba(0, 0, 0, 0)
    linear-gradient(45deg, rgb(15, 94, 247), rgb(15, 94, 247)) repeat scroll 0%
    0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(255, 255, 255);
  border-width: 0px;
  cursor: pointer;
  justify-content: center;
  white-space: nowrap;
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  box-sizing: border-box;
  margin: 0px;
  appearance: none;
  align-items: center;
  box-shadow: none;
  font-size: 14px;
  height: 44px;
  position: relative;
  vertical-align: top;
  user-select: none;
`;

export default function Button(props:btnAttributes) {
  return <> 
  <Btn/>
   </>;
}
