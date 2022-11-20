import React from "react";
import styled from "styled-components";
import { GiPlayerTime } from "react-icons/gi";

const Time = ({ timeData }) => {
  const time =
    new Date(timeData.disconnectTime) - new Date(timeData.connectTime);
  const average = Math.ceil(time / 1000 / 60);

  return (
    <Wrapper>
      <Title>
        <GiPlayerTime className="icon" />
        <div>Average Time</div>
      </Title>
      <Content>{average}분</Content>
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
    font-size: 2rem;
    margin-right: 1rem;
    color: rgb(160, 160, 160);
  }
`;

const Content = styled.div`
  margin: 1rem;
  text-align: center;
  font-size: 2rem;
  color: #f67280;
`;

export default Time;
