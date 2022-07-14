import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainProfile from ".";

export default {
  title: "Organisms/MainProfile",
  component: MainProfile,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MainProfile>;

const Template: ComponentStory<typeof MainProfile> = () => <MainProfile />;

export const Default = Template.bind({});
