import styled, { css } from "styled-components";

import contentAlign from "../../_styles/contentAlign";
import spaceSize from "../../_styles/spaceSize";
import contentDirection from "../../_styles/contentDirection";
import elementColor from "../../_styles/elementColor";

interface ArticleHeaderButton {
  color: "red" | "green" | "blue" | "white";
}

const articleHeaderButtonStyle = css<ArticleHeaderButton>`
  ${elementColor.blue};
  ${contentDirection.horizontal};
  ${contentAlign.center};
  gap: ${spaceSize.smaller};
  padding: ${spaceSize.small} ${spaceSize.small};
  border-radius: ${spaceSize.smaller};
`;

const ArticleHeaderButton = styled.button<ArticleHeaderButton>`
  ${articleHeaderButtonStyle};
`;

export default ArticleHeaderButton;
