import React from "react";
import { render, screen } from "@testing-library/react";

import Navigation from "./Navigation";

describe("<Navigation />", () => {
  test("nav 태그를 가진다.", () => {
    render(<Navigation />);

    const { nodeName } = screen.getByTestId("navigation");
    expect(nodeName).toBe("NAV");
  });

  test("a 태그(홈 링크)를 가진다.", () => {
    render(<Navigation />);

    const { nodeName } = screen.getByTestId("navigation-home-link");
    expect(nodeName).toBe("A");
  });
});
