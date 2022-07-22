import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import H1 from "./H1";

export default {
  title: "Atoms/H1",
  component: H1,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof H1>;

const Template: ComponentStory<typeof H1> = () => <H1 />;

export const Default = Template.bind({});
