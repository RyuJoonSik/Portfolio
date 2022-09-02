import React from "react";
import styled from "styled-components";

import { blueButtonStyle } from "../../atoms/Button/BlueButton";
import { postMangementButtonStyle } from "../../atoms/Button/PostMangementButton";

interface DailyLifePostQueryButtonListProps {
  handleOrderByDesc: () => void;
  handleOrderByAsc: () => void;
}

const StyledDailyLifePostQueryButtonList = styled.div`
  button {
    ${blueButtonStyle};
    ${postMangementButtonStyle};
    border-radius: 0;
  }
`;

export default function DailyLifePostQueryButtonList({
  handleOrderByDesc,
  handleOrderByAsc,
}: DailyLifePostQueryButtonListProps): JSX.Element {
  return (
    <StyledDailyLifePostQueryButtonList>
      <button onClick={handleOrderByDesc}>최신 순</button>
      <button onClick={handleOrderByAsc}>오래된 순</button>
    </StyledDailyLifePostQueryButtonList>
  );
}
