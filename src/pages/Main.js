import React from "react";
import Header from "../components/Header/Header";
import Content from "../components/Main/Content";
import styled from "styled-components";

const Main = () => {
  return (
    <Wrapper>
      <Header />
      <Content />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 90vmin;
`;

export default Main;
