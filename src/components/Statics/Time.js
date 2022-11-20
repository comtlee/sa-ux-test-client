import React from "react";
import styled from "styled-components";
import { GiPlayerTime } from "react-icons/gi";

const Time = () => {
  return (
    <Wrapper>
      <Title>
        <GiPlayerTime className="icon" />
        <div>Average Time</div>
      </Title>
      <Content>10분</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 35vmin;
  height: 15vmin;
  padding: 0.4rem;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  border-radius: 10px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;

  .icon {
    margin-right: 1rem;
    font-size: 2rem;
    color: rgb(160, 160, 160);
  }
`;

const Content = styled.div`
  text-align: center;
  margin: 1rem;
  font-size: 2rem;
  color: #f67280;
`;

export default Time;
