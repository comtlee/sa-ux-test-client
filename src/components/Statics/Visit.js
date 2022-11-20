import React from "react";
import { FaHouseUser } from "react-icons/fa";
import styled from "styled-components";
import PropTypes from "prop-types";

const Visit = ({ visitData }) => {
  return (
    <Wrapper>
      <Title>
        <FaHouseUser className="icon" />
        <div>Total Visit</div>
      </Title>
      <Content>
        <div>{visitData}명</div>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 25vmin;
  height: 15vmin;
  padding: 0.4rem;
  margin-right: 2rem;
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

Visit.propTypes = {
  visitData: PropTypes.number,
};

export default Visit;
