import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { DOMAIN } from "../../config/domain";
import ModalPortal from "../Modal/ModalPortal";
import ModalDelete from "../Modal/ModalDelete";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const DeleteProject = () => {
  const navigate = useNavigate();
  const params = useParams();
  const projectId = JSON.stringify(params);

  const handleDeleteProject = () => {
    axios.delete(`${DOMAIN}/projects/${projectId}`);

    navigate("/projects");
    navigate(0);
  };

  const handleCloseModal = () => {
    navigate("/projects");
  };

  return (
    <ModalPortal>
      <ModalDelete>
        <Header>
          <Text>프로젝트가 삭제됩니다</Text>
          <AiOutlineCloseCircle onClick={handleCloseModal} />
        </Header>
        <Button onClick={handleDeleteProject}>확인</Button>
      </ModalDelete>
    </ModalPortal>
  );
};
const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.7rem;
`;

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
  background-color: ${COLORS.LIGHT_PINK};
  font-size: 1.2rem;
`;

export default DeleteProject;
