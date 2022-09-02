import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InfiniteScrollToggleButton from "./InfiniteScrollToggleButton";

export default {
  title: "Modules/Button/InfiniteScrollToggleButton",
  component: InfiniteScrollToggleButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof InfiniteScrollToggleButton>;

const Template: ComponentStory<typeof InfiniteScrollToggleButton> = (args) => (
  <InfiniteScrollToggleButton {...args} />
);

export const Default = Template.bind({});
