import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Projects from "../pages/Projects";
import CreateProject from "../components/Projects/CreateProject";
import DeleteProject from "../components/Projects/DeleteProject";
import Dashboard from "../pages/Dashboard";
import Recording from "../pages/Recording";
import NotFound from "../pages/NotFound";

const App = () => {
  const isLoggedIn = localStorage.getItem("name") ? true : false;

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Projects /> : <Main />} />
      <Route path="/projects" element={<Projects />}>
        <Route path="new" element={<CreateProject />} />
        <Route path=":id/delete" element={<DeleteProject />} />
      </Route>
      <Route path="/tests/:id/dashboard" element={<Dashboard />} />
      <Route path="/tests/:id/recording" element={<Recording />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
