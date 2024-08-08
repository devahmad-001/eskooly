"use client";
import styled from "styled-components";
import { TfiEmail } from "react-icons/tfi";
import { inputAttributes } from "../../../../Type";
import { RiLockPasswordFill } from "react-icons/ri";

const Container = styled.div`
  padding-bottom: 10px;
  outline: rgb(74, 74, 74) none 0px;
  margin-bottom: 10.5px;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  outline: rgb(74, 74, 74) none 0px;
  box-sizing: border-box;
  clear: both;
  font-size: 14px;
  position: relative;
  text-align: left;
`;

const Input = styled.input`
  font-size: 17.5px;
  height: 42px;
  color: rgb(135, 135, 135);
  box-shadow: none;
  transition: all 0.8s ease 0s;
  border-color: rgb(204, 204, 204);
  padding-left: 40px;
  max-width: 100%;
  width: 100%;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  box-sizing: border-box;
  margin: 0px;
  appearance: none;
  align-items: center;
  border: 1px solid rgb(204, 204, 204);
  display: inline-flex;
  justify-content: flex-start;
  line-height: 26.25px;
  position: relative;
  vertical-align: top;
`;

const IconWrapper = styled.span`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: rgb(135, 135, 135);
`;

const InputField = (props: inputAttributes) => (
  <Container>
    <Wrapper>
      <Input type={props.type} placeholder={props.placeholder} required />
      <IconWrapper>
        {props.type === "email" && <TfiEmail />}
        {props.type === "password" && <RiLockPasswordFill />}
      </IconWrapper>
    </Wrapper>
  </Container>
);

export default InputField;
