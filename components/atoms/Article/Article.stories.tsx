import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Article from "./Article";
import CustomContainer from "../Container/CustomContainer";

export default {
  title: "Atoms/Article/Article",
  component: Article,
} as ComponentMeta<typeof Article>;

const Template: ComponentStory<typeof Article> = (args) => (
  <CustomContainer direction="vertical" gap="medium">
    <Article {...args}>Default = Full</Article>
    <Article size="full">Full</Article>
    <Article size="small">Small</Article>
  </CustomContainer>
);

export const Default = Template.bind({});
