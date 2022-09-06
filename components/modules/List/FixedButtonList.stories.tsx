import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FixedButtonList from "./FixedButtonList";

export default {
  title: "Modules/Box/FixedButtonList",
  component: FixedButtonList,
} as ComponentMeta<typeof FixedButtonList>;

const Template: ComponentStory<typeof FixedButtonList> = () => (
  <FixedButtonList />
);

export const Default = Template.bind({});
