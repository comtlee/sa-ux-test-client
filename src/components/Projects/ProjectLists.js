import React from "react";
import { useNavigate } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { BsArrowReturnRight } from "react-icons/bs";
import { ImCopy } from "react-icons/im";
import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const ProjectLists = ({ projectList }) => {
  const navigate = useNavigate();
  const projectlist = projectList?.data.filteredProjects;

  const handleCopyClipBoard = async (key) => {
    try {
      await navigator.clipboard.writeText(key);
      alert("클립보드에 Project Key값이 복사되었습니다.");
    } catch (error) {
      alert("복사에 실패했습니다. 다시 시도해주세요.");
    }
  };

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
            </ProjectLink>
            <ContentsList>
              <Title>Project Key</Title>
              <CopyIcon>
                <BsArrowReturnRight /> {list.key}
                <ImCopy
                  className="icon"
                  onClick={() => {
                    handleCopyClipBoard(list.key);
                  }}
                />
              </CopyIcon>
            </ContentsList>
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
  width: 95%;
  height: 98%;
  margin: 0 1rem;
  padding: 0.5rem;
  border-radius: 1rem;
  box-shadow: 0 1px 6px 0 ${COLORS.LIGHT_GRAY};
`;

const ProjectLink = styled.div`
  text-decoration: none;
`;

const ContentsList = styled.div`
  margin: 1rem;
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

const CopyIcon = styled.div`
  font-size: 1rem;
  color: ${COLORS.GRAY};

  .icon {
    margin-left: 0.4rem;
    font-size: 1.1rem;
    color: ${COLORS.LIGHT_PINK};
  }
`;

const TrashIcon = styled.div`
  width: 7vmin;
  margin: 0 auto;
  font-size: 1.7rem;
  color: ${COLORS.LIGHT_BLACK};
`;

export default ProjectLists;
