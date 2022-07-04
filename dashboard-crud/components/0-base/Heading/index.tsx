import styled from "styled-components";
import { Box } from "../Box";
import { text_20px_medium, text_24px_bold, text_24px_medium } from "../Text";

export const H1 = styled.h1`
  background-color: rgb(${({ theme }) => theme.color.ultramarineBlue});

  ${text_24px_bold};
  color: rgb(${({ theme }) => theme.color.cultured});
`;

export const H2 = styled.h2`
  padding: 1.25rem 0;
  border-bottom: 1px rgb(${({ theme }) => theme.color.chineseWhite}) solid;
  background-color: rgb(${({ theme }) => theme.color.antiFlashWhite});

  ${text_24px_medium}
  color: rgb(${({ theme }) => theme.color.eerieBlack});
`;

export const H3 = styled(Box).attrs({
  as: "h3",
})`
  gap: 1rem;
  box-sizing: border-box;
  padding: 1.5rem;
  background-color: rgb(${({ theme }) => theme.color.white});
  border-bottom: 1px rgb(${({ theme }) => theme.color.chineseWhite}) solid;

  ${text_20px_medium}
  color: rgb(${({ theme }) => theme.color.eerieBlack});
`;
