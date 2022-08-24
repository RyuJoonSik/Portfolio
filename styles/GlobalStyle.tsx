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
  h3 {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  body {
    position: relative;

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

  ul {
    list-style: none;
  }
`;

const customInittStyle = css`
  body {
    background-color: ${({ theme }) => theme.color.backgroundDefault};
  }

  time {
    width: 100%;

    ${fontSize.smaller};
  }

  textarea {
    height: 100px;

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
    /* &:focus-visible {
      border: ${spaceSize.smaller} solid red;
    } */

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

  form {
    ${contentDirection.vertical};
    gap: ${spaceSize.small};
    width: 100%;
  }

  input,
  textarea {
    min-width: 0;
    padding: ${spaceSize.small};
    background-color: transparent;
    border: ${spaceSize.smallest} solid
      ${({ theme }) => theme.color.borderDefault};
    border-radius: ${spaceSize.smaller};

    color: ${({ theme }) => theme.color.textDefault};

    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      ${fontSize.medium}
      color: ${({ theme }) => theme.color.textPlaceholder};
      opacity: 1; /* Firefox */
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: ${({ theme }) => theme.color.textPlaceholder};
    }

    &::-ms-input-placeholder {
      /* Microsoft Edge */
      color: ${({ theme }) => theme.color.textPlaceholder};
    }
  }

  input:focus,
  textarea:focus {
    border-color: ${({ theme }) => theme.color.borderFocus};
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
  ${customInittStyle};
`;
