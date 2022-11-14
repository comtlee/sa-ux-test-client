import React from "react";
import { Link } from "react-router-dom";
import { GrAddCircle } from "react-icons/gr";
import styled from "styled-components";

const TotalProject = () => {
  return (
    <Wrapper>
      <ProjectCreate to={"/projects/new"}>
        <GrAddCircle /> NEW PROJECT
      </ProjectCreate>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin: 0 2rem;
`;

const ProjectCreate = styled(Link)`
  display: flex;
  align-items: center;
  width: 20vmin;
  height: 5vmin;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 0.1rem solid #c0c0c0;
  border-radius: 2rem;
  text-decoration: none;
  font-size: 0.8rem;
  color: #585858;
`;

export default TotalProject;
