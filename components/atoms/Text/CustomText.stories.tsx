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
    <div>
      <CustomText size="smallest">smallest</CustomText>
    </div>
    <div>
      <CustomText size="smaller">smaller</CustomText>
    </div>
    <div>
      <CustomText size="small">small</CustomText>
    </div>
    <div>
      <CustomText size="medium">medium</CustomText>
    </div>
    <div>
      <CustomText size="large">large</CustomText>
    </div>
    <div>
      <CustomText size="larger">larger</CustomText>
    </div>
    <div>
      <CustomText size="largest">largest</CustomText>
    </div>
  </>
);

export const Default = Template.bind({});
