import React from "react";
import Visit from "./Visit";
import Site from "./Site";
import Time from "./Time";
import Keyword from "./Keyword";
import Tag from "./Tag";
import styled from "styled-components";
import PropTypes from "prop-types";

const Graph = ({ basicEvent, mouseEvent }) => {
  return (
    <Wrapper>
      <Left>
        <Card>
          <Visit visitData={basicEvent} />
          <Time timeData={basicEvent} />
        </Card>
        <Chart>
          <Site siteData={basicEvent} />
        </Chart>
      </Left>
      <Right>
        <Keyword keywordData={mouseEvent} />
        <Tag tagEvent={mouseEvent} />
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  float: left;
  width: 40%;
`;

const Card = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;

const Chart = styled.div`
  margin-left: 5rem;
`;

const Right = styled.div`
  display: flex;
  float: right;
  justify-content: space-evenly;
  margin-top: 2rem;
  width: 55%;
`;

Graph.propTypes = {
  basicEvent: PropTypes.array.isRequired,
  mouseEvent: PropTypes.array.isRequired,
};

export default Graph;
