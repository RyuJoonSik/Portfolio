import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HeaderContainer from ".";

export default {
  title: "Atoms/HeaderContainer",
  component: HeaderContainer,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof HeaderContainer>;

const Template: ComponentStory<typeof HeaderContainer> = (args) => (
  <HeaderContainer {...args} />
);

export const Default = Template.bind({});
