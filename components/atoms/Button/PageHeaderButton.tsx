import styled, { css } from "styled-components";
import { StyledIcon } from "@styled-icons/styled-icon";
import { Link } from "react-router-dom";
import React from "react";

import contentDirection from "../../_styles/contentDirection";
import contentAlign from "../../_styles/contentAlign";
import spaceSize from "../../_styles/spaceSize";
import fontSize from "../../_styles/fontSize";
import responsiveSize from "../../_styles/responsiveSize";
import elementColor from "../../_styles/elementColor";
import hoverEffect from "../../_styles/hoverEffect";
import activeEffect from "../../_styles/activeEffect";

export const pageHeaderButtonStyle = css`
  ${elementColor.blue};
  ${hoverEffect.blue};
  ${activeEffect.blue};
  ${contentDirection.vertical};
  ${contentAlign.center};
  min-width: 5rem;
  width: 5rem;
  padding: ${spaceSize.small} 0;
  border-radius: ${spaceSize.smaller};

  ${fontSize.smaller};

  ${responsiveSize.mobile} {
    border-radius: 0;
    flex: 1;
  }
`;

const PageHeaderButtonDefault = styled.button`
  ${pageHeaderButtonStyle};
`;

const PageHeaderLinkButton = styled(Link)`
  ${pageHeaderButtonStyle};
`;

interface PageHeaderButtonProps {
  to?: string;
  Icon?: StyledIcon;
  buttonName?: string;
  handleClick?: () => void;
}

function PageHeaderButton({
  to,
  Icon,
  buttonName,
  handleClick,
}: PageHeaderButtonProps): JSX.Element {
  const Children = () => (
    <>
      {Icon && <Icon size={24} />}
      {buttonName && buttonName}
    </>
  );
  const Button = () =>
    to ? (
      <PageHeaderLinkButton to={to} onClick={handleClick}>
        <Children />
      </PageHeaderLinkButton>
    ) : (
      <PageHeaderButtonDefault onClick={handleClick}>
        <Children />
      </PageHeaderButtonDefault>
    );

  return <Button />;
}

export default PageHeaderButton;
