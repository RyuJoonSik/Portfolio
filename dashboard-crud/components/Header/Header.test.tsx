import React from "react";
import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe("<Header />", () => {
  test("header 태그를 가진다.", () => {
    render(<Header />);

    const { nodeName } = screen.getByTestId("header");
    expect(nodeName).toBe("HEADER");
  });

  test("h1 태그를 가진다.", () => {
    render(<Header />);

    const { nodeName } = screen.getByTestId("header-title");
    expect(nodeName).toBe("H1");
  });

  test("제목은 'Hello, 울산!'이다.", () => {
    render(<Header />);

    const TITLE = screen.getByTestId("header-title");
    expect(TITLE).toHaveTextContent("Hello, 울산!");
  });

  test("button 태그(네비게이션 토글)를 가진다.", () => {
    render(<Header />);

    const { nodeName } = screen.getByTestId("header-navigation-toggle");
    expect(nodeName).toBe("BUTTON");
  });

  test("button 태그(다크 모드)를 가진다", () => {
    render(<Header />);

    const { nodeName } = screen.getByTestId("header-dark-mode-toggle");
    expect(nodeName).toBe("BUTTON");
  });

  test("input 태그(검색 상자)를 가진다", () => {
    render(<Header />);

    const { nodeName } = screen.getByTestId("header-search-box");
    expect(nodeName).toBe("INPUT");
  });
});
