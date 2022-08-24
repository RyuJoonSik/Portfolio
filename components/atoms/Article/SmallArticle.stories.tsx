import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SmallArticle from "./SmallArticle";

export default {
  title: "Atoms/Article/SmallArticle",
  component: SmallArticle,
} as ComponentMeta<typeof SmallArticle>;

const Template: ComponentStory<typeof SmallArticle> = () => (
  <>
    <SmallArticle>SmallArticle</SmallArticle>
  </>
);

export const Default = Template.bind({});
