import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body, h1 {
    margin: 0;
  }

  button, input {
    padding: 0;
    border: 0;
  }

  input, button {
    background-color: transparent;
  }

  button {
    cursor: pointer;
  }

  input:focus {
    outline: 0;
  }
`;
