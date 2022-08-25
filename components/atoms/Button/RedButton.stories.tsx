import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RedButton from "./RedButton";

export default {
  title: "Atoms/Button/RedButton",
  component: RedButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof RedButton>;

const Template: ComponentStory<typeof RedButton> = () => (
  <>
    <RedButton>RedButton</RedButton>
  </>
);

export const Default = Template.bind({});
