import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HeaderNavigation from "./HeaderNavigation";

export default {
  title: "Organisms/HeaderNavigation",
  component: HeaderNavigation,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof HeaderNavigation>;

const Template: ComponentStory<typeof HeaderNavigation> = () => (
  <HeaderNavigation />
);

export const Default = Template.bind({});
