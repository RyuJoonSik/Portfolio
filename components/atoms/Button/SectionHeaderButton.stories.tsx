import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Create } from "@styled-icons/material-outlined/Create";

import SectionHeaderButton from "./SectionHeaderButton";
import CustomContainer from "../Container/CustomContainer";

export default {
  title: "Atoms/Button/SectionHeaderButton",
  component: SectionHeaderButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof SectionHeaderButton>;

const Template: ComponentStory<typeof SectionHeaderButton> = () => (
  <CustomContainer direction="vertical">
    <div>Examples</div>
    <SectionHeaderButton buttonName="SectionHeaderButton" />
    <SectionHeaderButton
      Icon={Create}
      buttonName="SectionHeaderButtonWithIcon"
    />
  </CustomContainer>
);

export const Default = Template.bind({});
