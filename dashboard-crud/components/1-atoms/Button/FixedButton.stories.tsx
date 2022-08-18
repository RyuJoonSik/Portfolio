import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FixedButton from "./FixedButton";

export default {
  title: "Molecules/Button/FixedButton",
  component: FixedButton,
} as ComponentMeta<typeof FixedButton>;

const Template: ComponentStory<typeof FixedButton> = () => <FixedButton />;

export const Default = Template.bind({});
