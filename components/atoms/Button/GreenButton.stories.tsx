import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import GreenButton from "./GreenButton";

export default {
  title: "Atoms/Button/GreenButton",
  component: GreenButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof GreenButton>;

const Template: ComponentStory<typeof GreenButton> = () => (
  <>
    <GreenButton>GreenButton</GreenButton>
  </>
);

export const Default = Template.bind({});
