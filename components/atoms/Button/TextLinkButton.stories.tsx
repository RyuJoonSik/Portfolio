import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextLinkButton from "./TextLinkButton";

export default {
  title: "Atoms/Button/TextLinkButton",
  component: TextLinkButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof TextLinkButton>;

const Template: ComponentStory<typeof TextLinkButton> = (args) => (
  <TextLinkButton {...args} to="">
    TextLinkButton
  </TextLinkButton>
);

export const Default = Template.bind({});
