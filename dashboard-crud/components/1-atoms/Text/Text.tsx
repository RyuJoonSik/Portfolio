import styled from "styled-components";
import fontSize from "../../../styles/fontSize";

const Text = {
  Smallest: styled.span`
    ${fontSize.smallest};
  `,

  Smaller: styled.span`
    ${fontSize.smaller};
  `,

  Small: styled.span`
    ${fontSize.small};
  `,

  Medium: styled.span`
    ${fontSize.medium};
  `,

  Large: styled.span`
    ${fontSize.large};
  `,

  Larger: styled.span`
    ${fontSize.larger};
  `,

  Largest: styled.span`
    ${fontSize.largest};
  `,
};

export default Text;
