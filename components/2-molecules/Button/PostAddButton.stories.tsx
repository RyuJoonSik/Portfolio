import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PostAddButton from "./PostAddButton";

export default {
  title: "Molecules/Button/PostAddButton",
  component: PostAddButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof PostAddButton>;

const Template: ComponentStory<typeof PostAddButton> = (args) => (
  <PostAddButton {...args} />
);

export const Default = Template.bind({});
