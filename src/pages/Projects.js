import React from "react";
import Header from "../components/Header/Header";
import CreateButton from "../components/Projects/CreateButton";
import ProjectLists from "../components/Projects/ProjectLists";

const Projects = () => {
  return (
    <>
      <Header />
      <CreateButton />
      <ProjectLists />
    </>
  );
};

export default Projects;
