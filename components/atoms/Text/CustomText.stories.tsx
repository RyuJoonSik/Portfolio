import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CustomText from "./CustomText";

export default {
  title: "Atoms/Text/CustomText",
  component: CustomText,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof CustomText>;

const Template: ComponentStory<typeof CustomText> = () => (
  <>
    <CustomText size="smallest">smallest</CustomText>
    <CustomText size="smaller">smaller</CustomText>
    <CustomText size="small">small</CustomText>
    <CustomText size="medium">medium</CustomText>
    <CustomText size="large">large</CustomText>
    <CustomText size="larger">larger</CustomText>
    <CustomText size="largest">largest</CustomText>
  </>
);

export const Default = Template.bind({});
