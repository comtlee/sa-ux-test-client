import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { DOMAIN } from "../../config/domain";
import ModalPortal from "../Modal/ModalPortal";
import ModalDelete from "../Modal/ModalDelete";
import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const DeleteProject = () => {
  const navigate = useNavigate();
  const params = useParams();
  const projectId = JSON.stringify(params);

  const handleDeleteProject = () => {
    axios.delete(`${DOMAIN}/projects/${projectId}`);

    navigate("/projects");
  };

  return (
    <ModalPortal>
      <ModalDelete>
        <Text>프로젝트가 삭제됩니다</Text>
        <Button onClick={handleDeleteProject}>확인</Button>
      </ModalDelete>
    </ModalPortal>
  );
};

const Text = styled.div`
  text-align: center;
  font-size: 1.5rem;
`;

const Button = styled.button`
  width: 100px;
  margin: 1rem auto;
  padding: 0.5rem;
  border-radius: 1rem;
  border-style: none;
  background-color: ${COLORS.LIGHT_GRAY};
  font-size: 1.2rem;
`;

export default DeleteProject;
