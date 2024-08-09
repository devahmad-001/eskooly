"use client";
import React from "react";
import FeaturesBox from "./FeaturesBox";
import styled from "@emotion/styled";
const Container = styled.div`
  background-color: #0f5ef7;
  width: 100vw;
  height: 100vh;
`;
export default function Features() {
  return (
    <>
      <Container>
        <FeaturesBox />
      </Container>
    </>
  );
}
