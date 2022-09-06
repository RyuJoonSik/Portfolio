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
    <Article {...args}>default size(full)</Article>
    <Article size="full">full size</Article>
    <Article size="small">small size</Article>
  </CustomContainer>
);

export const Default = Template.bind({});
