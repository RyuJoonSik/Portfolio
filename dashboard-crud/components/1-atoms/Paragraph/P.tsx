import styled from "styled-components";

const P = styled.p`
  box-sizing: border-box;
  padding: 1.5rem;

  color: ${({ theme }) => theme.color.textDefault};
`;

export default P;
