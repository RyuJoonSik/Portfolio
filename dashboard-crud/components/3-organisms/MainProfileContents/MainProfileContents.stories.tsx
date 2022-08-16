import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainProfileContents from "./MainProfileContents";

export default {
  title: "Organisms/MainProfileContents",
  component: MainProfileContents,
} as ComponentMeta<typeof MainProfileContents>;

const Template: ComponentStory<typeof MainProfileContents> = () => (
  <MainProfileContents />
);

export const Default = Template.bind({});
