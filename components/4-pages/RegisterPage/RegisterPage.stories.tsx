import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RegisterPage from "./RegisterPage";

export default {
  title: "Pages/RegisterPage",
  component: RegisterPage,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof RegisterPage>;

const Template: ComponentStory<typeof RegisterPage> = () => <RegisterPage />;

export const Default = Template.bind({});
