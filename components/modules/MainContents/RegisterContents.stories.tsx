import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RegisterContents from "./RegisterContents";

export default {
  title: "Modules/MainContents/RegisterContents",
  component: RegisterContents,
} as ComponentMeta<typeof RegisterContents>;

const Template: ComponentStory<typeof RegisterContents> = () => (
  <RegisterContents />
);

export const Default = Template.bind({});
