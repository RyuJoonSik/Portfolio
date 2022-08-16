import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PageContentContainer from "./PageContentContainer";

export default {
  title: "Atoms/Box/PageContentContainer ",
  component: PageContentContainer,
} as ComponentMeta<typeof PageContentContainer>;

const Template: ComponentStory<typeof PageContentContainer> = () => (
  <PageContentContainer />
);

export const Default = Template.bind({});
