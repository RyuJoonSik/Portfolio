import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PostUpdateButton from "./PostUpdateButton";

export default {
  title: "Modules/Button/PostUpdateButton",
  component: PostUpdateButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof PostUpdateButton>;

const Template: ComponentStory<typeof PostUpdateButton> = () => (
  <PostUpdateButton />
);

export const Default = Template.bind({});
