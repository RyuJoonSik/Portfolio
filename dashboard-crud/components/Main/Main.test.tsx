import React from "react";
import { render, screen } from "@testing-library/react";

import Main from "./Main";

describe("<Main />", () => {
  test("main 태그를 가진다.", () => {
    render(<Main />);

    const { nodeName } = screen.getByTestId("main");
    expect(nodeName).toBe("MAIN");
  });

  test("header 태그를 가진다.", () => {
    render(<Main />);

    const { nodeName } = screen.getByTestId("main-header");
    expect(nodeName).toBe("HEADER");
  });

  test("h2 태그를 가진다.", () => {
    render(<Main />);

    const { nodeName } = screen.getByTestId("main-title");
    expect(nodeName).toBe("H2");
  });

  test('기본 제목은 "홈"이다.', () => {
    render(<Main />);

    const TITLE = screen.getByTestId("main-title");
    expect(TITLE).toHaveTextContent("홈");
  });

  test("button 태그(글쓰기)를 가진다.", () => {
    render(<Main />);

    const { nodeName } = screen.getByTestId("main-create-button");
    expect(nodeName).toBe("BUTTON");
  });

  test("Card 컴포넌트를 가진다.", () => {
    render(<Main />);

    const CARD = screen.getByTestId("card");
    expect(CARD).toBeInTheDocument();
  });
});
