import styled from "styled-components";

import { text_16px_medium } from "../Text";

export const DefinitionTerm = styled.dt`
  ${text_16px_medium}

  & ~ & {
    margin-top: 2.5rem;
  }
`;
