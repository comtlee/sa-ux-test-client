import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../../components/Header/Header";
import "@testing-library/jest-dom";

describe("Header", () => {
  it("로그아웃 되어 있으면 로그인 버튼이 보여야한다", async () => {
    render(
      <Router>
        <Header />
      </Router>,
    );

    await waitFor(async () => {
      const button = await screen.findByRole("button");

      expect(button.textContent).toBe("로그인");
    });
  });
});
