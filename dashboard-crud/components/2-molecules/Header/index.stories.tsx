import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "./";

export default {
  title: "Molecules/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Default = Template.bind({});
