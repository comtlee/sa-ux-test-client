import React from "react";
import { FiCheck } from "react-icons/fi";
import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const Content = () => {
  return (
    <Wrapper>
      <HeadText>실제 사용자의 모든 데이터를 한눈에 확인하세요.</HeadText>
      <CheckList>
        <List>
          <FiCheck className="icon" /> 방문 횟수
        </List>
        <List>
          <FiCheck className="icon" /> 평균 이용 시간
        </List>
        <List>
          <FiCheck className="icon" /> 유입된 이전 사이트
        </List>
        <List>
          <FiCheck className="icon" /> 이용자의 관심 키워드 파악(click)
        </List>
        <List>
          <FiCheck className="icon" /> 이용 화면 녹화
        </List>
      </CheckList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100vw;
  height: 100vh;
  background-image: url("/images/ux-test.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 180vmin;
  opacity: 0.8;
`;

const HeadText = styled.div`
  margin-top: 2rem;
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

  .icon {
    color: ${COLORS.PINK};
  }
`;

export default Content;
