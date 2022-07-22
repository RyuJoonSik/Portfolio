import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DD from "./DD";

export default {
  title: "Atoms/DD",
  component: DD,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof DD>;

const Template: ComponentStory<typeof DD> = () => <DD />;

export const Default = Template.bind({});
