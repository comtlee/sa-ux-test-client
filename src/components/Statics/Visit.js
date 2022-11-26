import React from "react";
import { FaHouseUser } from "react-icons/fa";
import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import PropTypes from "prop-types";

const Visit = ({ visitData }) => {
  return (
    <Wrapper>
      <Title>
        <FaHouseUser className="icon" />
        <div>Total Visit</div>
      </Title>
      <Content>
        <div>{visitData[0].visit}명</div>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 25vmin;
  height: 15vmin;
  padding: 0.4rem;
  margin-right: 2rem;
  -webkit-box-shadow: 2px 4px 10px 1px ${COLORS.SHADOW};
  box-shadow: 2px 4px 10px 1px ${COLORS.SHADOW};
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
    color: ${COLORS.LIGHT_GRAY};
  }
`;

const Content = styled.div`
  margin: 1rem;
  text-align: center;
  font-size: 2rem;
  color: ${COLORS.PINK};
`;

Visit.propTypes = {
  visitData: PropTypes.array.isRequired,
};

export default Visit;
