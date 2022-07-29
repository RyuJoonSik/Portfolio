import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainLogin from "./MainLogin";

export default {
  title: "Organisms/MainLogin",
  component: MainLogin,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MainLogin>;

const Template: ComponentStory<typeof MainLogin> = () => <MainLogin />;

export const Default = Template.bind({});
