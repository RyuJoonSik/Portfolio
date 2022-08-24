import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SubmitButton from "./SubmitButton";

export default {
  title: "Atoms/Button/SubmitButton",
  component: SubmitButton,
} as ComponentMeta<typeof SubmitButton>;

const Template: ComponentStory<typeof SubmitButton> = () => (
  <SubmitButton>SubmitButton</SubmitButton>
);

export const Default = Template.bind({});
