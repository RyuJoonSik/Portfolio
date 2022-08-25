import styled, { css } from "styled-components";

import contentAlign from "../../_styles/contentAlign";
import contentDirection from "../../_styles/contentDirection";
import spaceSize from "../../_styles/spaceSize";

export const postMangementButtonStyle = css`
  ${contentDirection.horizontal};
  ${contentAlign.center};
  gap: ${spaceSize.smaller};
  padding: ${spaceSize.smaller} ${spaceSize.smaller};
  border-radius: ${spaceSize.smaller};

  word-break: keep-all;
`;

const PostMangementButton = styled.button`
  ${postMangementButtonStyle};
`;

export default PostMangementButton;
