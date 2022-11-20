import React from "react";
import Visit from "./Visit";
import Time from "./Time";
import Site from "./Site";
import Keyword from "./Keyword";
import Tag from "./Tag";
import styled from "styled-components";

const Graph = () => {
  return (
    <Wrapper>
      <Left>
        <Card>
          <Visit />
          <Time />
        </Card>
        <Chart>
          <Site />
        </Chart>
      </Left>
      <Right>
        <Keyword />
        <Tag />
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
  float: left;
  flex-direction: column;
  align-items: center;
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
  width: 60%;
  margin-top: 2rem;
`;

export default Graph;
