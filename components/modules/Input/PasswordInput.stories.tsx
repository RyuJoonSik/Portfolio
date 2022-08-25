import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PasswordInput from "./PasswordInput";

export default {
  title: "Modules/Input/PasswordInput",
  component: PasswordInput,
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = (args) => (
  <PasswordInput {...args} />
);

export const Default = Template.bind({});
