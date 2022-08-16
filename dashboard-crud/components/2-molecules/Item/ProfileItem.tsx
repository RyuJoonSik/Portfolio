import React from "react";
import { StyledIcon } from "@styled-icons/styled-icon";

import Article from "../../1-atoms/Article/Article";
import ArticleContentContainer from "../../1-atoms/Box/ArticleContentContainer";
import HorizontalContentContainer from "../../1-atoms/Box/HorizontalContentContainer";
import ArticleHeader from "../../1-atoms/Header/ArticleHeader";
import Icon from "../../1-atoms/Icon/Icon";

interface ProfileItemProps {
  children: React.ReactNode;
  title: string;
  titleIcon: StyledIcon;
}

export default function ProfileItem({
  children,
  title,
  titleIcon,
}: ProfileItemProps): JSX.Element {
  return (
    <Article.Full>
      <ArticleHeader>
        <HorizontalContentContainer>
          <Icon.Large as={titleIcon} />
          <h3>{title}</h3>
        </HorizontalContentContainer>
      </ArticleHeader>
      <ArticleContentContainer>{children}</ArticleContentContainer>
    </Article.Full>
  );
}
