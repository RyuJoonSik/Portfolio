import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainBox from ".";

export default {
  title: "Atoms/MainBox",
  component: MainBox,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MainBox>;

const Template: ComponentStory<typeof MainBox> = () => <MainBox />;

export const Default = Template.bind({});
