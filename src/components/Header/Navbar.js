import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const Navbar = () => {
  const projectId = localStorage.getItem("projectId");

  return (
    <Wrapper>
      <Dashboard to={"/projects"} data-testid="Projectlist">
        Projectlist
      </Dashboard>
      <Dashboard
        to={`/tests/${JSON.parse(projectId)}/dashboard`}
        data-testid="dashboard"
      >
        Dashboard
      </Dashboard>
      <Dashboard
        to={`/tests/${JSON.parse(projectId)}/recording`}
        data-testid="recording"
      >
        Recording
      </Dashboard>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0.6rem;
  padding: 1rem;
  border-bottom: 0.1rem solid ${COLORS.LIGHT_GRAY};
`;

const Dashboard = styled(Link)`
  text-decoration: none;
  color: ${COLORS.LIGHT_GRAY};

  :hover {
    color: ${COLORS.GRAY};
  }
`;

export default Navbar;
