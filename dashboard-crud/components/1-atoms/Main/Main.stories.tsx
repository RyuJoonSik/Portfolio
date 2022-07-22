import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Main from "./Main";

export default {
  title: "Atoms/Main",
  component: Main,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = () => <Main />;

export const Default = Template.bind({});
