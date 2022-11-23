import React from "react";
import { render, screen } from "@testing-library/react";
import ModalCreate from "../../components/Modal/ModalCreate";
import "@testing-library/jest-dom";

describe("ModalCreate", () => {
  it("모달은 props를 보여주어야 한다.", () => {
    const children = "children";

    render(<ModalCreate>{children}</ModalCreate>);

    expect(screen.getByText("children")).toBeInTheDocument();
  });
});
