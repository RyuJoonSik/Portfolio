import { css } from "styled-components";

const boxShadow = {
  button: css`
    box-shadow: 0px 4px 6px -2px rgb(0 0 0 / 12%),
      0px 2px 2px -1px rgb(0 0 0 / 5%);
  `,

  header: css`
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);
  `,
};

export default boxShadow;
