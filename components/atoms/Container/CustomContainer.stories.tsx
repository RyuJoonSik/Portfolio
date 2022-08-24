import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CustomContainer from "./CustomContainer";

export default {
  title: "Atoms/Container/CustomContainer",
  component: CustomContainer,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof CustomContainer>;

const Template: ComponentStory<typeof CustomContainer> = () => (
  <>
    <CustomContainer size="smallest">smallest</CustomContainer>
    <CustomContainer size="smaller">smaller</CustomContainer>
    <CustomContainer size="small">small</CustomContainer>
    <CustomContainer size="medium">medium</CustomContainer>
    <CustomContainer size="large">large</CustomContainer>
    <CustomContainer size="larger">larger</CustomContainer>
    <CustomContainer size="largest">largest</CustomContainer>
  </>
);

export const Default = Template.bind({});
