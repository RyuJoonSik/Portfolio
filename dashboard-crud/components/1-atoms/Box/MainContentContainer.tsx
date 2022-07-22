import styled from "styled-components";
import CONTENT_ALIGN from "../../../styles/contentAlign";
import CONTENT_DIRECTION from "../../../styles/contentDirection";

const MainContentContainer = styled.div`
  ${CONTENT_DIRECTION.VERTICAL};
  ${CONTENT_ALIGN.START_CENTER};
  gap: 1.25rem;
  box-sizing: border-box;
  width: 100%;
  max-width: 63.75rem;
  padding: 0 1rem;
`;

export default MainContentContainer;
