import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PageContentsContainer from "./PageContentsContainer";

export default {
  title: "Atoms/Box/PageContentsContainer ",
  component: PageContentsContainer,
} as ComponentMeta<typeof PageContentsContainer>;

const Template: ComponentStory<typeof PageContentsContainer> = () => (
  <PageContentsContainer>PageContentsContainer</PageContentsContainer>
);

export const Default = Template.bind({});
