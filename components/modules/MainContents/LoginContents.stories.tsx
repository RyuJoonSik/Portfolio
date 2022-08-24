import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LoginContents from "./LoginContents";

export default {
  title: "Organisms/LoginContents",
  component: LoginContents,
} as ComponentMeta<typeof LoginContents>;

const Template: ComponentStory<typeof LoginContents> = () => <LoginContents />;

export const Default = Template.bind({});
