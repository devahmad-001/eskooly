"use client";
import React from "react";
import Button from "../ui/Button";
import styled from "@emotion/styled";
import Image from "next/image";
import { GoPersonAdd } from "react-icons/go";
const Navbar = styled.div`
  background-image: linear-gradient(to right, #09327f, #06183b) !important;
  background: #fff;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12);
  width: 100%;
  height: 4.6rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  transition: all 0.4s;
  @media screen and (min-width: 1024px) {
    min-height: 3.25rem;
  }

  @media screen and (min-width: 1024px) {
    -ms-flex-align: stretch;
    align-items: stretch;
    display: -ms-flexbox;
    display: flex;
  }
`;
const Container = styled.div`
  padding-inline: 5rem;
  display: flex;
  justify-content: space-between;
  min-height: 3.25rem;
  width: 100%;
  outline: none !important;
  @media screen and (min-width: 1024px) {
    margin-left: -0.75rem;
  }
  margin-block: 0.8rem;
`;
const PicBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;
const ContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 66vw;
  align-self: baseline;
`;
const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 2rem;
`;
const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
`;
const Paragraph = styled.p`
  font-size: medium;
  font-weight: 300;
  color: white;
`;
export default function Nav() {
  return (
    <>
      {/* <Navbar>

      </Navbar> */}
      <Container>
        <PicBox>
          <Image width={100} height={55} alt="" src="/imgs/form/logoxx.png" />
        </PicBox>
        <ContentBox>
          <TextBox>
            <Paragraph>Products</Paragraph>
            <Paragraph>Help</Paragraph>
          </TextBox>
          <BtnBox>
            <Button
            text="Sign Up"
            hoverBackgroundColor="rgb(18, 70, 159)"
              fontSize="medium"
              outline=" rgb(255, 255, 255) none 0px"
              borderRadius=" 500px"
              padding="12px 40px"
              transition="all 0.5s ease 0s"
              background="rgba(0, 0, 0, 0) linear-gradient(45deg, rgb(38, 105, 239), rgb(15, 94, 247)) repeat scroll 0% 0% / auto padding-box border-box"
              color=" rgb(255, 255, 255)"
              backgroundColor="rgba(0, 0, 0, 0)"
              minWidth="5rem"
              borderColor="rgb(255, 255, 255)"
              borderWidth="0px"
              cursor=" pointer"
              justifyContent="center"
              textAlign="center"
              whitespace="nowrap"
              TextDecoration="none solid rgb(255, 255, 255)"
              boxSizing="border-box"
              lineHeight="21px"
              position="relative"
              verticalAlign="top"
              userselect="none"
            />
            {/* <Button
              text="Login"
              fontSize="medium"
              outline=" rgb(255, 255, 255) none 0px"
              borderRadius=" 500px"
              padding="12px 40px"
              transition="all 0.5s ease 0s"
              background="rgb(65 97 161)"
              color=" black"
              backgroundColor="rgba(0, 0, 0, 0)"
              minWidth="5rem"
              borderColor="rgb(255, 255, 255)"
              borderWidth="0px"
              cursor=" pointer"
              justifyContent="center"
              textAlign="center"
              whitespace="nowrap"
              boxSizing="border-box"
              lineHeight="21px"
              position="relative"
              verticalAlign="top"
              userselect="none"
            /> */}
          </BtnBox>
        </ContentBox>
      </Container>
    </>
  );
}
