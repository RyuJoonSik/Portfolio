import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DefaultTemplate from "./DefaultTemplate";

export default {
  title: "Templates/DefaultTemplate",
  component: DefaultTemplate,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof DefaultTemplate>;

const Template: ComponentStory<typeof DefaultTemplate> = (args) => (
  <DefaultTemplate {...args} />
);

export const Default = Template.bind({});
