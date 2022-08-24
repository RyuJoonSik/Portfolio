import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Face } from "@styled-icons/material-sharp/Face";
import { Construction } from "@styled-icons/material-sharp/Construction";
import { School } from "@styled-icons/material-sharp/School";

import ArticleHeader from "./ArticleHeader";
import Icon from "../Icon/Icon";

export default {
  title: "Atoms/Header/ArticleHeader",
  component: ArticleHeader,
} as ComponentMeta<typeof ArticleHeader>;

const Template: ComponentStory<typeof ArticleHeader> = () => (
  <>
    <ArticleHeader>
      <Icon.Large as={Face} />
      <h3>About me</h3>
    </ArticleHeader>
    <ArticleHeader>
      <Icon.Large as={Construction} />
      <h3>Skills</h3>
    </ArticleHeader>
    <ArticleHeader>
      <Icon.Large as={School} />
      <h3>Education & Certificate</h3>
    </ArticleHeader>
    <ArticleHeader>
      <h3>안녕하세요</h3>
    </ArticleHeader>
  </>
);

export const Default = Template.bind({});
