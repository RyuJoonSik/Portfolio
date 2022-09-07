import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InfiniteScrollButton from "./InfiniteScrollButton";

export default {
  title: "Modules/Button/InfiniteScrollButton",
  component: InfiniteScrollButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof InfiniteScrollButton>;

const Template: ComponentStory<typeof InfiniteScrollButton> = (args) => (
  <InfiniteScrollButton {...args} />
);

export const Default = Template.bind({});
