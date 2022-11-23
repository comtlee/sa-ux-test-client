import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("Navbar", () => {
  beforeEach(() => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );
  });

  it("Projectlist 클릭 시 '/projects'로 렌더링 되는가?", () => {
    const Projectlist = screen.getByTestId("Projectlist");

    userEvent.click(Projectlist);

    expect(screen.getByText(/Projectlist/i)).toBeInTheDocument();
  });

  it("Dashboard 클릭 시 '/tests/:id/dashboard'로 렌더링 되는가?", () => {
    const dashboard = screen.getByTestId("dashboard");

    userEvent.click(dashboard);

    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });

  it("Recording 클릭 시 '/tests/:id/recording'로 렌더링 되는가?", () => {
    const recording = screen.getByTestId("recording");

    userEvent.click(recording);

    expect(screen.getByText(/recording/i)).toBeInTheDocument();
  });
});
