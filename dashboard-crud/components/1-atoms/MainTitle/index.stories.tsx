import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainTitle from ".";

export default {
  title: "Atoms/MainTitle",
  component: MainTitle,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MainTitle>;

const Template: ComponentStory<typeof MainTitle> = () => <MainTitle />;

export const Default = Template.bind({});
