import React from "react";
import { render, screen } from "@testing-library/react";
import DefaultPage from "./DefaultPage";

describe("<DefaultPage />", () => {
  test("Header 컴포넌트를 가진다.", () => {
    render(<DefaultPage />);

    const HEADER = screen.getByTestId("header");
    expect(HEADER).toBeInTheDocument();
  });

  test("Main 컴포넌트를 가진다.", () => {
    render(<DefaultPage />);

    const MAIN = screen.getByTestId("main");
    expect(MAIN).toBeInTheDocument();
  });

  test("Navigation 컴포넌트를 가진다.", () => {
    render(<DefaultPage />);

    const NAVIGATION = screen.getByTestId("navigation");
    expect(NAVIGATION).toBeInTheDocument();
  });
});
