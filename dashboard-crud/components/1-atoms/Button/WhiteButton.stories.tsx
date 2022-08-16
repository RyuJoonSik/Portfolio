import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import WhiteButton from "./WhiteButton";

export default {
  title: "Atoms/Button/WhiteButton",
  component: WhiteButton.Rectangle.Medium,
} as ComponentMeta<typeof WhiteButton.Rectangle.Medium>;

const Template: ComponentStory<typeof WhiteButton.Rectangle.Medium> = () => (
  <WhiteButton.Rectangle.Medium />
);

export const Default = Template.bind({});
