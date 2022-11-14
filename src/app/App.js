import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Projects from "../pages/Projects";
import CreateProject from "../components/Projects/CreateProject";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/new" element={<CreateProject />} />
    </Routes>
  );
};

export default App;
