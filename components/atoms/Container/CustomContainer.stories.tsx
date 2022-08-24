import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CustomContainer from "./CustomContainer";

export default {
  title: "Atoms/Container/CustomContainer",
  component: CustomContainer,
} as ComponentMeta<typeof CustomContainer>;

const Template: ComponentStory<typeof CustomContainer> = () => (
  <>
    <CustomContainer direction="horizontal">
      <div>direction&nbsp;</div>
      <div>horizontal</div>
    </CustomContainer>
    <CustomContainer direction="vertical">
      <div>direction&nbsp;</div>
      <div>vertical</div>
    </CustomContainer>

    <CustomContainer size="smaller">size smaller</CustomContainer>
    <CustomContainer size="small">size small</CustomContainer>
    <CustomContainer size="medium">size medium</CustomContainer>
    <CustomContainer size="large">size large</CustomContainer>
    <CustomContainer size="larger">size larger</CustomContainer>
    <CustomContainer size="largest">size largest</CustomContainer>
  </>
);

export const Default = Template.bind({});
