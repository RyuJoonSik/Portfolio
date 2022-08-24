import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CenterFixedContainer from "./CenterFixedContainer";

export default {
  title: "Atoms/Container/CenterFixedContainer ",
  component: CenterFixedContainer,
} as ComponentMeta<typeof CenterFixedContainer>;

const Template: ComponentStory<typeof CenterFixedContainer> = () => (
  <CenterFixedContainer>CenterFixedContainer</CenterFixedContainer>
);

export const Default = Template.bind({});
