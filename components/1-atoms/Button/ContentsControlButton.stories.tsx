import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ContentsControlButton from "./ContentsControlButton";

export default {
  title: "Atoms/Button/ContentsControlButton",
  component: ContentsControlButton,
} as ComponentMeta<typeof ContentsControlButton>;

const Template: ComponentStory<typeof ContentsControlButton> = () => (
  <ContentsControlButton />
);

export const Default = Template.bind({});
