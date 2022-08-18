import styled from "styled-components";

const Small = "16px";
const Medium = "20px";
const Large = "24px";

const Icon = {
  Small: styled.i`
    width: ${Small};
    min-width: ${Small};
    height: ${Small};
    min-height: ${Small};
  `,

  Medium: styled.i`
    width: ${Medium};
    min-width: ${Medium};
    height: ${Medium};
    min-height: ${Medium};
  `,

  Large: styled.i`
    width: ${Large};
    min-width: ${Large};
    height: ${Large};
    min-height: ${Large};
  `,
};

export default Icon;
