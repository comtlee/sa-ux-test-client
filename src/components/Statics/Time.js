import React from "react";
import styled from "styled-components";
import { GiPlayerTime } from "react-icons/gi";
import { COLORS } from "../../constants/colors";
import PropTypes from "prop-types";

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

Time.propTypes = {
  timeData: PropTypes.object.isRequired,
};

export default Time;
