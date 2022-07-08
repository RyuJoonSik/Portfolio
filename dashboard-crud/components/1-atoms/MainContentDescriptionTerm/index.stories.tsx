import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainContentDescriptionTerm from ".";

export default {
  title: "Atoms/MainContentDescriptionTerm",
  component: MainContentDescriptionTerm,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MainContentDescriptionTerm>;

const Template: ComponentStory<typeof MainContentDescriptionTerm> = (props) => (
  <MainContentDescriptionTerm {...props} />
);

export const Default = Template.bind({});
