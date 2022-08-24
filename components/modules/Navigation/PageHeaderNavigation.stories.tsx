import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PageHeaderNavigation from "./PageHeaderNavigation";

export default {
  title: "Modules/Navigation/PageHeaderNavigation",
  component: PageHeaderNavigation,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof PageHeaderNavigation>;

const Template: ComponentStory<typeof PageHeaderNavigation> = () => (
  <PageHeaderNavigation />
);

export const Default = Template.bind({});
