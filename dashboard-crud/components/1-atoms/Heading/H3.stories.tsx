import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import H3 from "./H3";

export default {
  title: "Atoms/H3",
  component: H3,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof H3>;

const Template: ComponentStory<typeof H3> = () => <H3 />;

export const Default = Template.bind({});
