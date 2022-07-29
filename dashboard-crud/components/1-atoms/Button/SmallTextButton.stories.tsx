import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SmallTextButton from "./SmallTextButton";

export default {
  title: "Atoms/SmallTextButton",
  component: SmallTextButton,
} as ComponentMeta<typeof SmallTextButton>;

const Template: ComponentStory<typeof SmallTextButton> = () => (
  <SmallTextButton to="" />
);

export const Default = Template.bind({});
