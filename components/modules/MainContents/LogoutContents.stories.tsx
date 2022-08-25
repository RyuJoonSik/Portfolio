import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LogoutContents from "./LogoutContents";

export default {
  title: "Modules/MainContents/LogoutContents",
  component: LogoutContents,
} as ComponentMeta<typeof LogoutContents>;

const Template: ComponentStory<typeof LogoutContents> = () => (
  <LogoutContents />
);

export const Default = Template.bind({});
