import React from "react";
import { render, screen } from "@testing-library/react";

import Card from "./Card";

describe("<Card />", () => {
  test("article 태그를 가진다.", () => {
    render(<Card />);

    const { nodeName } = screen.getByTestId("card");
    expect(nodeName).toBe("ARTICLE");
  });

  test("img 태그(카드 이미지)를 가진다.", () => {
    render(<Card />);

    const { nodeName } = screen.getByTestId("card-image");
    expect(nodeName).toBe("IMG");
  });

  test("button 태그(즐겨찾기)를 가진다.", () => {
    render(<Card />);

    const { nodeName } = screen.getByTestId("card-start-button");
    expect(nodeName).toBe("BUTTON");
  });

  test("button 태그(프로필)를 가진다.", () => {
    render(<Card />);

    const { nodeName } = screen.getByTestId("card-profile-button");
    expect(nodeName).toBe("BUTTON");
  });

  test("button 태그(메뉴)를 가진다.", () => {
    render(<Card />);

    const { nodeName } = screen.getByTestId("card-menu-button");
    expect(nodeName).toBe("BUTTON");
  });

  test("p 태그(프로필 이름)를 가진다.", () => {
    render(<Card />);

    const { nodeName } = screen.getByTestId("card-profile-name");
    expect(nodeName).toBe("P");
  });

  test("h3 태그를 가진다.", () => {
    render(<Card />);

    const { nodeName } = screen.getByTestId("card-title");
    expect(nodeName).toBe("H3");
  });

  test("p 태그(본문 요약)을 가진다.", () => {
    render(<Card />);

    const { nodeName } = screen.getByTestId("card-summary");
    expect(nodeName).toBe("P");
  });
});
