import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ScrollToTopButton from "./ScrollToTopButton";

export default {
  title: "Molecules/Button/ScrollToTopButton",
  component: ScrollToTopButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof ScrollToTopButton>;

const Template: ComponentStory<typeof ScrollToTopButton> = () => (
  <ScrollToTopButton />
);

export const Default = Template.bind({});
