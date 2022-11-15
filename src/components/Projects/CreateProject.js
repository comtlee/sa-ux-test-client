import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { DOMAIN } from "../../config/domain";
import { v4 as uuidv4 } from "uuid";
import ModalPortal from "../Modal/ModalPortal";
import ModalCreate from "../Modal/ModalCreate";
import styled from "styled-components";

const CreateProject = () => {
  const [projectName, setProjectName] = useState("");
  const [projectUrl, setProjectUrl] = useState("");

  const navigate = useNavigate();
  const userId = localStorage.getItem("id");

  const handleProjectSubmit = (event) => {
    event.preventDefault();

    axios.post(`${DOMAIN}/projects/${userId}`, {
      projectName: projectName,
      projectUrl: projectUrl,
      key: uuidv4(),
    });

    navigate("/projects");
  };
  return (
    <ModalPortal>
      <ModalCreate>
        <Title>Create a Project</Title>
        <Form>
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
          <Button onClick={handleProjectSubmit}>Submit</Button>
        </Form>
      </ModalCreate>
    </ModalPortal>
  );
};

const Title = styled.div`
  text-align: center;
  font-size: 2rem;
`;

const Form = styled.div`
  margin: 2rem;

  input {
    height: 5vmin;
    border-radius: 0.8rem;
  }
`;

const ProjectName = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
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
  background-color: #c0c0c0;
  font-size: 1.2rem;
`;

export default CreateProject;
