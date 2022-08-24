import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PostCreateButton from "./PostCreateButton";

export default {
  title: "Modules/Button/PostCreateButton",
  component: PostCreateButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof PostCreateButton>;

const Template: ComponentStory<typeof PostCreateButton> = (args) => (
  <PostCreateButton {...args} />
);

export const Default = Template.bind({});
