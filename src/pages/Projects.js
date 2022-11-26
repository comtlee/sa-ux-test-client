import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { DOMAIN } from "../config/domain";
import Header from "../components/Header/Header";
import CreateButton from "../components/Projects/CreateButton";
import ProjectLists from "../components/Projects/ProjectLists";

const getProjectList = async () => {
  return await axios.get(`${DOMAIN}/projects/${localStorage.getItem("id")}`);
};

const Projects = () => {
  const { data, isError } = useQuery("getProjectList", getProjectList);

  if (isError) {
    throw new Error("Error");
  }

  return (
    <>
      <Header />
      <CreateButton />
      <ProjectLists projectList={data} />
    </>
  );
};

export default Projects;
