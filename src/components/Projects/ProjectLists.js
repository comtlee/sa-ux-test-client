import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { DOMAIN } from "../../config/domain";
import { BsTrash } from "react-icons/bs";
import { ImCopy } from "react-icons/im";
import styled from "styled-components";

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
        console.log(error);
      }
    };
    axiosData();
  }, []);

  const handleTextCopy = () => {
    const text = document.getElementById("key").textContent;
    const textarea = document.createElement("textarea");

    textarea.textContent = text;
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("복사가 완료되었습니다.");
  };

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
                <Content>{list.projectName}</Content>
              </ContentsList>
              <ContentsList>
                <Title>Project Url</Title>
                <Content>{list.projectUrl}</Content>
              </ContentsList>
              <ContentsList>
                <Title>Project Key</Title>
                <Content id="key">
                  {list.key}
                  <ImCopy className="copy" onClick={handleTextCopy} />
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
  height: 30vmin;
  margin: 2rem;
  padding: 1rem;
  border-radius: 2rem;
  box-shadow: 0 1px 6px 0 #c0c0c0;
`;

const ProjectLink = styled.div`
  margin: 0.4rem;
  text-decoration: none;
`;

const ContentsList = styled.div`
  margin: 0.4rem;
`;

const Title = styled.div`
  margin-bottom: 0.2rem;
  font-size: 1.3rem;
  color: #c0c0c0;
`;

const Content = styled.div`
  font-size: 0.9rem;
  color: #585858;

  .copy {
    margin-left: 0.5rem;
    font-size: 1rem;
    color: #f67280;
  }
`;

const TrashIcon = styled(Link)`
  width: 7vmin;
  margin: 0 auto;
  font-size: 1.7rem;
  color: #080808;
`;

export default ProjectLists;
