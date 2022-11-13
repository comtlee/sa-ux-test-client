import React from "react";
import { GrAddCircle } from "react-icons/gr";
import styled from "styled-components";

const TotalProject = () => {
  return (
    <Wrapper>
      <ProjectAdd>
        <GrAddCircle /> NEW PROJECT
      </ProjectAdd>
      <ProjectCount>
        <Text>TotalProject</Text>
        <Number>1</Number>
      </ProjectCount>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin: 0 2rem;
`;

const ProjectAdd = styled.div`
  display: flex;
  align-items: center;
  width: 20vmin;
  height: 5vmin;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 0.1rem solid #c0c0c0;
  border-radius: 2rem;
  font-size: 0.8rem;
  color: #585858;
`;

const ProjectCount = styled.div`
  display: inline-block;
  flex-direction: column;
  width: 20vmin;
  padding: 1.4rem;
  border: 0.1rem solid #c0c0c0;
  border-radius: 2rem;
`;

const Text = styled.div`
  font-size: 0.8rem;
  color: #c0c0c0;
`;

const Number = styled.div`
  color: #585858;
`;

export default TotalProject;
