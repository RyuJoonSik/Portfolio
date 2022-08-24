import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import WhiteButton from "./WhiteButton";

export default {
  title: "Atoms/Button/WhiteButton",
  component: WhiteButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof WhiteButton>;

const Template: ComponentStory<typeof WhiteButton> = () => (
  <WhiteButton>WhiteButton</WhiteButton>
);

export const Default = Template.bind({});
