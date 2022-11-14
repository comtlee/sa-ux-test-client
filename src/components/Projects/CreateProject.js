import React from "react";
import Modal from "../Modal/Modal";
import ModalPortal from "../Modal/ModalPortal";
import styled from "styled-components";

const CreateProject = () => {
  const handleProjectSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <ModalPortal>
      <Modal>
        <Title>Create a Project</Title>
        <Form>
          <ProjectName>
            <label>PROJECT NAME</label>
            <input />
          </ProjectName>
          <ProjectUrl>
            <label>SITE URL</label>
            <input />
          </ProjectUrl>
          <Button onClick={handleProjectSubmit}>Submit</Button>
        </Form>
      </Modal>
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
  margin-bottom: 2rem;
  flex-direction: column;
`;

const ProjectUrl = styled.div`
  display: flex;
  margin-bottom: 1em;
  flex-direction: column;
`;

const Button = styled.button`
  display: flex;
  border-radius: 1rem;
  border-style: none;
  padding: 0.7rem;
  margin-left: 11rem;
  font-size: 1.2rem;
  background-color: #c0c0c0;
`;

export default CreateProject;
