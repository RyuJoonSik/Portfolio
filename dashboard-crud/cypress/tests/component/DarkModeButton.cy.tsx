import React from "react";
import { mount } from "cypress/react";

import ColorThemeContextProvider from "../../../contexts/ColorThemeContext";
import DarkModeButton from "../../../components/2-molecules/DarkModeButton/DarkModeButton";

describe("DarkModeButton", () => {
  it("라이트 모드로 초기화한다.", () => {
    mount(
      <ColorThemeContextProvider>
        <DarkModeButton />
      </ColorThemeContextProvider>
    );

    cy.get("[data-testid=darkModeButton]").should("contain.text", "다크 모드");
  });

  it("모드를 변경하면 모드와 일치하는 텍스트 컨텐츠로 변경된다.", () => {
    mount(
      <ColorThemeContextProvider>
        <DarkModeButton />
      </ColorThemeContextProvider>
    );

    cy.get("[data-testid=darkModeButton]")
      .click()
      .should("contain.text", "라이트 모드")
      .click()
      .should("contain.text", "다크 모드");
  });

  it("모드를 변경하면 모드와 일치하는 테마로 변경된다.", () => {
    mount(
      <ColorThemeContextProvider>
        <DarkModeButton />
      </ColorThemeContextProvider>
    );

    cy.get("[data-testid=darkModeButton]")
      .click()
      .should("contain.text", "라이트 모드")
      .click()
      .should("contain.text", "다크 모드");
  });
});
