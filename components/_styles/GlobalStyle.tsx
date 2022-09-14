import { createGlobalStyle, css } from "styled-components";

import { black, white } from "./color";
import contentDirection from "./contentDirection";
import fontSize from "./fontSize";
import fontWeight from "./fontWeight";
import spaceSize from "./spaceSize";

const normalizeAndResetStyle = css`
  html,
  body,
  div,
  button,
  a,
  p,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  time,
  figure,
  figcaption,
  form,
  label,
  input,
  textarea,
  header,
  main,
  nav,
  h1,
  h2,
  h3,
  h4 {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  body {
    font-family: "Noto Sans KR", sans-serif;
    line-height: 1.5;
  }

  progress {
    vertical-align: baseline;
  }

  button,
  input,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
  }

  button,
  input {
    /* 1 */
    overflow: visible;
  }

  button {
    /* 1 */
    text-transform: none;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  a {
    background-color: transparent;
  }

  ul,
  ol {
    list-style: none;
  }
`;

const customStyle = css`
  body {
    background-color: ${({ theme }) => theme.color.backgroundDefault};
  }

  ul li {
    position: relative;

    padding-left: ${spaceSize.small};

    &::before {
      position: absolute;
      top: 12px;

      width: 5px;
      height: 5px;
      background: ${({ theme }) => theme.color.textDefault};
      border-radius: 50%;

      transform: translate(-10px, -50%);
      content: "";
    }
  }

  ol li {
    counter-reset: section;

    &::before {
      counter-increment: section;
      content: counters(section, ".") ". ";
    }
  }

  progress {
    width: 100%;
  }

  time {
    ${fontSize.smaller};
  }

  textarea {
    word-break: break-all;
    resize: none;
  }

  nav {
    text-align: center;
  }

  button:focus,
  button:focus-visible,
  a:focus,
  a:focus-visible,
  input:focus,
  input:focus-visible,
  textarea:focus,
  textarea:focus-visible {
    outline: 0;
  }

  button,
  a {
    position: relative;

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;

      border: ${spaceSize.smaller} solid transparent;
      border-radius: inherit;

      content: "";
    }

    &:focus-visible::after {
      border-color: red;
    }
  }

  button {
    background-color: transparent;

    cursor: pointer;
  }

  a {
    color: ${black.default};
    text-decoration: none;
  }

  dd {
    padding-left: 2.5rem;
  }

  h1 {
    ${fontSize.larger};
    ${fontWeight.medium};
    color: ${white.light};
    white-space: nowrap;
  }

  h2 {
    ${fontSize.larger};
    color: ${({ theme }) => theme.color.textAccent};
  }

  h3 {
    ${fontSize.large};
    color: ${({ theme }) => theme.color.textAccent};
  }
`;

export default createGlobalStyle`
  ${normalizeAndResetStyle};
  ${customStyle};
`;
