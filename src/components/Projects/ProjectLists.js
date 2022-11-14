import React, { useEffect, useState } from "react";
import axios from "axios";
import { DOMAIN } from "../../config/domain";
import { BsTrash } from "react-icons/bs";
import { ImCopy } from "react-icons/im";
import styled from "styled-components";

const ProjectLists = () => {
  const [projectList, setProjectList] = useState("");
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

  return (
    <Container>
      {projectList &&
        projectList.map((list) => (
          <Wrapper key={list._id}>
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
                <ImCopy />
              </Content>
            </ContentsList>
            <BsTrash className="trash" />
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
  width: 50vmin;
  height: 30vmin;
  margin: 2rem;
  padding: 1rem;
  border-radius: 2rem;
  box-shadow: 0 1px 6px 0 #c0c0c0;

  .trash {
    width: 100px;
    margin: 0 auto;
    font-size: 3rem;
  }
`;

const ContentsList = styled.div`
  margin: 0.4rem;
`;

const Title = styled.div`
  margin-bottom: 0.2rem;
  font-size: 1.4rem;
  color: #c0c0c0;
`;

const Content = styled.div`
  font-size: 0.9rem;
  color: #585858;
`;

export default ProjectLists;
