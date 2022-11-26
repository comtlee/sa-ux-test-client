import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const Navbar = () => {
  const projectId = localStorage.getItem("projectId");
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Dashboard
        onClick={() => navigate("/projects")}
        data-testid="Projectlist"
      >
        Projectlist
      </Dashboard>
      <Dashboard
        onClick={() => navigate(`/tests/${JSON.parse(projectId)}/dashboard`)}
        data-testid="dashboard"
      >
        Dashboard
      </Dashboard>
      <Dashboard
        onClick={() => navigate(`/tests/${JSON.parse(projectId)}/recording`)}
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

const Dashboard = styled.div`
  text-decoration: none;
  color: ${COLORS.LIGHT_GRAY};

  :hover {
    color: ${COLORS.GRAY};
  }
`;

export default Navbar;
