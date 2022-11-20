import React from "react";
import Visit from "./Visit";
import Site from "./Site";
import Time from "./Time";
import Keyword from "./Keyword";
import Tag from "./Tag";
import styled from "styled-components";
import PropTypes from "prop-types";

const Graph = ({
  visitData,
  timeData,
  siteData,
  keywordKeys,
  keywordValues,
  tagKeys,
  tagValues,
}) => {
  return (
    <Wrapper>
      <Left>
        <Card>
          <Visit visitData={visitData} />
          <Time timeData={timeData} />
        </Card>
        <Chart>
          <Site siteData={siteData} />
        </Chart>
      </Left>
      <Right>
        <Keyword keywordKeys={keywordKeys} keywordValues={keywordValues} />
        <Tag tagKeys={tagKeys} tagValues={tagValues} />
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
  margin-left: 3rem;
`;

const Right = styled.div`
  display: flex;
  float: right;
  justify-content: space-evenly;
  margin-top: 2rem;
  width: 60%;
`;

Graph.propTypes = {
  staticData: PropTypes.number,
};

export default Graph;
