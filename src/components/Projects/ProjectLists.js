import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { BsArrowReturnRight } from "react-icons/bs";
import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const ProjectLists = ({ projectList }) => {
  const navigate = useNavigate();
  const projectlist = projectList?.data.filteredProjects;

  const handleMoveDashboard = (url) => {
    navigate(url);
  };

  return (
    <Container>
      {projectlist &&
        projectlist.map((list) => (
          <Wrapper key={list._id}>
            <ProjectLink
              onClick={() =>
                handleMoveDashboard(`/tests/${list._id}/dashboard`)
              }
              data-testid="project-list"
            >
              <ContentsList>
                <Title>Project Name</Title>
                <Content>
                  <BsArrowReturnRight /> {list.projectName}
                </Content>
              </ContentsList>
              <ContentsList>
                <Title>Project Url</Title>
                <Content>
                  <BsArrowReturnRight /> {list.projectUrl}
                </Content>
              </ContentsList>
              <ContentsList>
                <Title>Project Key</Title>
                <Content>
                  <BsArrowReturnRight /> {list.key}
                </Content>
              </ContentsList>
            </ProjectLink>
            <TrashIcon onClick={() => navigate(`/projects/${list._id}/delete`)}>
              <BsTrash />
            </TrashIcon>
          </Wrapper>
        ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 1.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 55vmin;
  height: 38vmin;
  margin: 0 1rem;
  padding: 0.5rem;
  border-radius: 1rem;
  box-shadow: 0 1px 6px 0 ${COLORS.LIGHT_GRAY};
`;

const ProjectLink = styled.div`
  margin: 0.4rem;
  text-decoration: none;
`;

const ContentsList = styled.div`
  margin: 1rem 1rem;
`;

const Title = styled.div`
  margin-bottom: 0.4rem;
  font-size: 1.2rem;
  color: ${COLORS.LIGHT_GRAY};
`;

const Content = styled.div`
  font-size: 1rem;
  color: ${COLORS.GRAY};
`;

const TrashIcon = styled.div`
  width: 7vmin;
  margin: 0 auto;
  font-size: 1.7rem;
  color: ${COLORS.LIGHT_BLACK};
`;

export default ProjectLists;
