import React from "react";

export default function Card() {
  return (
    <article data-testid="card">
      <img data-testid="card-image" src="" alt="카드 이미지" />
      <button data-testid="card-start-button"></button>
      <button data-testid="card-profile-button"></button>
      <button data-testid="card-menu-button"></button>
      <p data-testid="card-profile-name"></p>
      <h3 data-testid="card-title">Lorem Ipsum</h3>
      <p data-testid="card-summary">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
    </article>
  );
}
