import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextButton from "./TextLinkButton";

export default {
  title: "Atoms/Button/TextButton",
  component: TextButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = (args) => (
  <TextButton {...args}>TextButton</TextButton>
);

export const Default = Template.bind({});
