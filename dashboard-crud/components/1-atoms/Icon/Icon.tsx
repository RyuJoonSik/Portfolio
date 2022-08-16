import styled from "styled-components";

const Small = "16px";
const Medium = "20px";
const Large = "24px";

const Icon = {
  Small: styled.i`
    width: ${Small};
    height: ${Small};
  `,

  Medium: styled.i`
    width: ${Medium};
    height: ${Medium};
  `,

  Large: styled.i`
    width: ${Large};
    height: ${Large};
  `,
};

export default Icon;
