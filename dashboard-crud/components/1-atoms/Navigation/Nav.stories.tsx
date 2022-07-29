import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Nav from "./Nav";

export default {
  title: "Atoms/Nav",
  component: Nav,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = () => <Nav></Nav>;

export const Default = Template.bind({});
