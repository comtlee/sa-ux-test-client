import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const projectId = localStorage.getItem("projectId");

  return (
    <Wrapper>
      <Dashboard to={`/tests/${JSON.parse(projectId)}/dashboard`}>
        Dashboard
      </Dashboard>
      <Recording to={`/tests/${JSON.parse(projectId)}/recording`}>
        Recording
      </Recording>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0.6rem;
  padding: 1rem;
  border-bottom: 0.1rem solid black;
`;

const Dashboard = styled(Link)`
  text-decoration: none;
  color: #c0c0c0;

  :hover {
    color: #585858;
  }
`;

const Recording = styled(Link)`
  text-decoration: none;
  color: #c0c0c0;

  :hover {
    color: #585858;
  }
`;

export default Navbar;
