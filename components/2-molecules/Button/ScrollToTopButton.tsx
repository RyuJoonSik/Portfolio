import React from "react";
import styled from "styled-components";

import FixedButton from "../../1-atoms/Button/FixedButton";
import fontSize from "../../../styles/fontSize";

const StyledFixedButton = styled(FixedButton)`
  width: 44px;
  height: 44px;
  border-radius: 50%;

  ${fontSize.smallest};
  line-height: 1;
`;

export default function ScrollToTopButton(): JSX.Element {
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return <StyledFixedButton onClick={handleClick}>TO TOP</StyledFixedButton>;
}
