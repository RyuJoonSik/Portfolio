import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import EmailInput from "./EmailInput";

export default {
  title: "Molecules/Input/EmailInput",
  component: EmailInput,
} as ComponentMeta<typeof EmailInput>;

const Template: ComponentStory<typeof EmailInput> = (args) => (
  <EmailInput {...args} />
);

export const Default = Template.bind({});
