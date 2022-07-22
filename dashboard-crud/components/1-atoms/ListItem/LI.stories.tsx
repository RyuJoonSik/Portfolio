import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LI from "./LI";

export default {
  title: "Atoms/LI",
  component: LI,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof LI>;

const Template: ComponentStory<typeof LI> = () => <LI />;

export const Default = Template.bind({});
