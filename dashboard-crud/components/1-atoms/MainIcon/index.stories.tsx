import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainIcon from ".";

export default {
  title: "Atoms/MainIcon",
  component: MainIcon,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof MainIcon>;

const Template: ComponentStory<typeof MainIcon> = (args) => (
  <MainIcon {...args} />
);

export const Default = Template.bind({});
