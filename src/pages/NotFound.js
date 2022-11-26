import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../constants/colors";

const NotFound = () => {
  const navigate = useNavigate();

  const handleNotFound = () => {
    navigate("/");
  };

  return (
    <Back>
      <Title>404</Title>
      <Text>잘못된 경로이거나 로그인이 필요합니다.</Text>
      <TextButton onClick={handleNotFound}>메인으로 되돌아가기</TextButton>
    </Back>
  );
};

export default NotFound;

const Back = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vmin;
  background-color: ${COLORS.LIGHT_GRAY};
`;

const Title = styled.div`
  margin: 2rem;
  font-size: 20rem;
`;

const Text = styled.div`
  margin: 2rem;
  font-size: 3rem;
`;

const TextButton = styled.button`
  width: 200px;
  height: 60px;
  margin: 0 auto;
  border-style: none;
  border-radius: 1rem;
  font-size: 1rem;
`;
