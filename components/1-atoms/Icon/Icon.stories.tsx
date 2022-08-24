import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Brightness6 } from "@styled-icons/material-outlined/Brightness6";

import Icon from "./Icon";

export default {
  title: "Atoms/Icon/Icon",
  component: Icon.Medium,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Icon.Medium>;

const Template: ComponentStory<typeof Icon.Medium> = () => (
  <>
    <Icon.Small as={Brightness6} />
    <Icon.Medium as={Brightness6} />
    <Icon.Large as={Brightness6} />
  </>
);

export const Default = Template.bind({});
