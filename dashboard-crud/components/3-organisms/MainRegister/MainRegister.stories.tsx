import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainRegister from "./MainRegister";

export default {
  title: "Organisms/MainRegister",
  component: MainRegister,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MainRegister>;

const Template: ComponentStory<typeof MainRegister> = () => <MainRegister />;

export const Default = Template.bind({});
