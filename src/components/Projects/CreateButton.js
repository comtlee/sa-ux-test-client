import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const CreateButton = () => {
  return (
    <Wrapper>
      <ProjectCreate to={"/projects/new"}>
        <BsPlusLg className="icon" />
      </ProjectCreate>
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 1rem 2rem;
`;

const ProjectCreate = styled(Link)`
  padding: 1rem;
  text-decoration: none;
  font-size: 2rem;
  color: ${COLORS.GRAY};

  .icon {
    color: ${COLORS.LIGHT_GRAY};
  }
`;

export default CreateButton;
