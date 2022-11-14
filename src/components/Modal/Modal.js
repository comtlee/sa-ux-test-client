import React, { useState } from "react";
import styled from "styled-components";

const Modal = ({ children }) => {
  const [isModal, setIsModal] = useState(true);
  const onClose = () => {
    setIsModal(!isModal);
  };

  return (
    <Background onClick={onClose}>
      {isModal && <Content>{children}</Content>}
    </Background>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 70vmin;
  height: 40vmin;
  padding: 1rem;
  background: #dfdfff;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
`;

export default Modal;
