import React from "react";
import Card from "../Card/Card";

export default function Main() {
  return (
    <main data-testid="main">
      <header data-testid="main-header">
        <h2 data-testid="main-title">홈</h2>
        <button data-testid="main-create-button"></button>
      </header>
      <Card />
    </main>
  );
}
