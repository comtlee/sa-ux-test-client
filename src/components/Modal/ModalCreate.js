import React from "react";
import styled from "styled-components";

const ModalCreate = ({ children }) => {
  return (
    <Background>
      <Content>{children}</Content>
    </Background>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #d0d0d0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 70vmin;
  height: 40vmin;
  padding: 1rem;
  border-radius: 2rem;
  background: #ffffff;
`;

export default ModalCreate;
