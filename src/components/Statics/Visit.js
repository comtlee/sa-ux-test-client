import React from "react";
import { FaHouseUser } from "react-icons/fa";
import styled from "styled-components";

const Visit = () => {
  return (
    <Wrapper>
      <Title>
        <FaHouseUser className="icon" />
        <div>Total Visit</div>
      </Title>
      <Content>
        <div>1명</div>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 25vmin;
  height: 15vmin;
  margin-right: 2rem;
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

export default Visit;
