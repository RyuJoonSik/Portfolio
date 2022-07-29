import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HeaderButtonContainer from "./HeaderButtonContainer";
export default {
  title: "Atoms/HeaderButtonContainer",
  component: HeaderButtonContainer,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof HeaderButtonContainer>;

const Template: ComponentStory<typeof HeaderButtonContainer> = () => (
  <HeaderButtonContainer></HeaderButtonContainer>
);

export const Default = Template.bind({});
