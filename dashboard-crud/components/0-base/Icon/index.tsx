import styled from "styled-components";

export const Icon = styled.i`
  width: 24px;
  height: 24px;
`;

export const HeaderIcon = styled(Icon)`
  color: rgb(${({ theme }) => theme.color.cultured});
`;

export const MainIcon = styled(Icon)`
  color: rgb(${({ theme }) => theme.color.eerieBlack});
`;
