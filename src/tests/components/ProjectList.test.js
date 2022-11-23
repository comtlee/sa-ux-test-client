import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ProjectLists from "../../components/Projects/ProjectLists";
import "@testing-library/jest-dom";

describe("ProjectLists", () => {
  it("로그인 하지 않으면 리스트 화면이 보이지 않아야 한다.", () => {
    render(
      <Router>
        <ProjectLists />
      </Router>,
    );
    const Projectlist = screen.queryByTestId("project-list");

    expect(Projectlist).toBeNull();
  });
});
