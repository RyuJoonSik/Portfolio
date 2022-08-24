import React from "react";
import { StyledIcon } from "@styled-icons/styled-icon";

import Article from "../../atoms/Article/Article";
import ArticleHeader from "../../atoms/Header/ArticleHeader";
import CustomContainer from "../../atoms/Container/CustomContainer";
import ArticleContentsContainer from "../../atoms/Container/ArticleContentsContainer";

interface ProfileItemProps {
  children: React.ReactNode;
  title: string;
  TitleIcon: StyledIcon;
}

export default function ProfileItem({
  children,
  title,
  TitleIcon,
}: ProfileItemProps): JSX.Element {
  return (
    <Article>
      <ArticleHeader>
        <CustomContainer direction="horizontal" align="center" gap="small">
          <TitleIcon size={24} />
          <h3>{title}</h3>
        </CustomContainer>
      </ArticleHeader>
      <ArticleContentsContainer>{children}</ArticleContentsContainer>
    </Article>
  );
}
