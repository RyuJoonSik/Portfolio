import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DT from "./DT";

export default {
  title: "Atoms/DT",
  component: DT,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof DT>;

const Template: ComponentStory<typeof DT> = () => <DT />;

export const Default = Template.bind({});
