import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Article from "./Article";

export default {
  title: "Atoms/Article/Article",
  component: Article,
} as ComponentMeta<typeof Article>;

const Template: ComponentStory<typeof Article> = () => (
  <>
    <Article>Article</Article>
  </>
);

export const Default = Template.bind({});
