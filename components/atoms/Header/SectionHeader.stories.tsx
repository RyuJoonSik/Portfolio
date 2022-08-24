import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SectionHeader from "./SectionHeader";

export default {
  title: "Atoms/Header/SectionHeader",
  component: SectionHeader,
} as ComponentMeta<typeof SectionHeader>;

const Template: ComponentStory<typeof SectionHeader> = () => (
  <SectionHeader>SectionHeader</SectionHeader>
);

export const Default = Template.bind({});
