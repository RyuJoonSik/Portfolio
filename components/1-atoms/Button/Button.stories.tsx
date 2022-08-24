import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Atoms/Button/Button",
  component: Button.White,
} as ComponentMeta<typeof Button.White>;

const Template: ComponentStory<typeof Button.White> = () => (
  <>
    <Button.Blue>Button.Blue</Button.Blue>
    <Button.White>Button.White</Button.White>
  </>
);

export const Default = Template.bind({});
