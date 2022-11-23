import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Projects from "../pages/Projects";
import CreateProject from "../components/Projects/CreateProject";
import DeleteProject from "../components/Projects/DeleteProject";
import Dashboard from "../pages/Dashboard";
import Recording from "../pages/Recording";

const App = () => {
  const user = localStorage.getItem("name");

  return (
    <Routes>
      {!user ? (
        <Route path="/" element={<Main />} />
      ) : (
        <Route path="/" element={<Projects />} />
      )}
      <Route path="/projects" element={<Projects />}>
        <Route path="new" element={<CreateProject />} />
        <Route path=":id/delete" element={<DeleteProject />} />
      </Route>
      <Route path="/tests/:id">
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="recording" element={<Recording />} />
      </Route>
    </Routes>
  );
};

export default App;
