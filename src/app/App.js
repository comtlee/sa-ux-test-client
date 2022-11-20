import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Projects from "../pages/Projects";
import CreateProject from "../components/Projects/CreateProject";
import DeleteProject from "../components/Projects/DeleteProject";
import Dashboard from "../pages/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/new" element={<CreateProject />} />
      <Route path="/projects/:id/delete" element={<DeleteProject />} />
      <Route path="/tests/:id/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
