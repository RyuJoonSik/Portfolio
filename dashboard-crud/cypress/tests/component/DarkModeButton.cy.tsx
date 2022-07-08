import React from "react";
import { mount } from "cypress/react";

import ThemeContextProvider from "../../../contexts/ThemeContext";
import DarkModeButton from "../../../components/2-molecules/DarkModeButton";

describe("DarkModeButton", () => {
  it("라이트 모드로 초기화한다.", () => {
    mount(
      <ThemeContextProvider>
        <DarkModeButton />
      </ThemeContextProvider>
    );

    cy.get("[data-testid=darkModeButton]").should("contain.text", "다크 모드");
  });

  it("모드를 변경하면 텍스트 컨텐츠가 변한다.", () => {
    mount(
      <ThemeContextProvider>
        <DarkModeButton />
      </ThemeContextProvider>
    );

    cy.get("[data-testid=darkModeButton]")
      .click()
      .should("contain.text", "라이트 모드")
      .click()
      .should("contain.text", "다크 모드");
  });
});
