import { mount } from "cypress/react";

describe("다크 모드 버튼", () => {
  it("다크 모드 버튼을 클릭하면 텍스트가 라이트 모드로 변경", () => {
    cy.visit("http://127.0.0.1:5500/");
  });
});
