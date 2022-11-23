import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { DOMAIN } from "../../config/domain";
import { BsTrash } from "react-icons/bs";
import { BsArrowReturnRight } from "react-icons/bs";
import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const ProjectLists = () => {
  const [projectList, setProjectList] = useState("");

  const navigate = useNavigate();
  const userId = localStorage.getItem("id");

  useEffect(() => {
    const axiosData = async () => {
      try {
        const response = await axios.get(`${DOMAIN}/projects/${userId}`);

        setProjectList(response.data.filteredProjects);
      } catch (error) {
        throw new Error(error);
      }
    };
    axiosData();
  }, []);

  const handleMoveDashboard = (url) => {
    navigate(url);
  };

  return (
    <Container>
      {projectList &&
        projectList.map((list) => (
          <Wrapper key={list._id}>
            <ProjectLink
              onClick={() =>
                handleMoveDashboard(`/tests/${list._id}/dashboard`)
              }
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
            <TrashIcon to={`/projects/${list._id}/delete`}>
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
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vmin;
  height: 35vmin;
  margin: 0 2rem;
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

const TrashIcon = styled(Link)`
  width: 7vmin;
  margin: 0 auto;
  font-size: 1.7rem;
  color: ${COLORS.LIGHT_BLACK};
`;

export default ProjectLists;
