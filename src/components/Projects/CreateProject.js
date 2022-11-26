import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";
import { DOMAIN } from "../../config/domain";
import { v4 as uuidv4 } from "uuid";
import ModalPortal from "../Modal/ModalPortal";
import ModalCreate from "../Modal/ModalCreate";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const CreateProject = () => {
  const [projectName, setProjectName] = useState("");
  const [projectUrl, setProjectUrl] = useState("");

  const navigate = useNavigate();

  const userId = localStorage.getItem("id");

  const createProject = async () => {
    return await axios.post(`${DOMAIN}/projects/${userId}`, {
      projectName: projectName,
      projectUrl: projectUrl,
      key: uuidv4(),
    });
  };
  const { mutate, isError } = useMutation((value) => createProject(value));

  if (isError) {
    throw new Error("Error");
  }

  const handleProjectSubmit = (event) => {
    event.preventDefault();

    mutate({
      projectName: projectName,
      projectUrl: projectUrl,
      key: uuidv4(),
    });

    navigate("/projects");
    navigate(0);
  };

  const handleCloseModal = () => {
    navigate("/projects");
  };

  return (
    <ModalPortal>
      <ModalCreate>
        <Form onSubmit={handleProjectSubmit}>
          <Header>
            <Title>Create a Project</Title>
            <AiOutlineCloseCircle onClick={handleCloseModal} />
          </Header>
          <ProjectName>
            <label>PROJECT NAME</label>
            <input
              type="text"
              value={projectName}
              onChange={(event) => setProjectName(event.target.value)}
            />
          </ProjectName>
          <ProjectUrl>
            <label>SITE URL</label>
            <input
              type="text"
              value={projectUrl}
              onChange={(event) => setProjectUrl(event.target.value)}
            />
          </ProjectUrl>
          <Button>Submit</Button>
        </Form>
      </ModalCreate>
    </ModalPortal>
  );
};

const Form = styled.form`
  margin: 2rem;

  input {
    width: 50vmin;
    height: 5vmin;
    border-radius: 0.4rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 2.5rem;
`;

const Title = styled.div`
  text-align: center;
  font-size: 2rem;
`;

const ProjectName = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const ProjectUrl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`;

const Button = styled.button`
  display: flex;
  width: 100px;
  margin: 0 auto;
  padding: 0.7rem;
  border-radius: 1rem;
  border-style: none;
  background-color: ${COLORS.LIGHT_PINK};
  font-size: 1.2rem;
`;

export default CreateProject;
