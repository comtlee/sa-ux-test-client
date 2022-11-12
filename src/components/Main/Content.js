import React from "react";
import { FiCheck } from "react-icons/fi";
import styled from "styled-components";

const Content = () => {
  return (
    <Wrapper>
      <HeadText>실제 사용자의 모든 데이터를 한눈에 확인하세요.</HeadText>
      <CheckList>
        <List>
          <FiCheck color="#f67280" /> 방문 횟수
        </List>
        <List>
          <FiCheck color="#f67280" /> 평균 이용 시간
        </List>
        <List>
          <FiCheck color="#f67280" /> 유입된 이전 사이트
        </List>
        <List>
          <FiCheck color="#f67280" /> 마우스의 움직임(move, hover, click)
        </List>
        <List>
          <FiCheck color="#f67280" /> 이용 화면 녹화
        </List>
      </CheckList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  width: 100vw;
  background-image: url("/images/ux-test.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 80%;
`;

const HeadText = styled.div`
  margin-top: 3rem;
  margin-bottom: 1rem;
  font-size: 3rem;
`;

const CheckList = styled.div`
  display: flex;
  margin-left: 7rem;
`;

const List = styled.div`
  margin: 0.8rem;
  font-size: 1.5rem;
`;

export default Content;
