import styled from "styled-components";

const DL = styled.dl`
  box-sizing: border-box;
  padding: 1.5rem;

  color: ${({ theme }) => theme.color.textDefault};
`;

export default DL;
