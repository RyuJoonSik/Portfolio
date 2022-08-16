import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Brightness6 } from "@styled-icons/material-outlined/Brightness6";

import BlueButton from "./BlueButton";
import Icon from "../Icon/Icon";

export default {
  title: "Atoms/Button/BlueButton",
  component: BlueButton.Rectangle.Medium,
} as ComponentMeta<typeof BlueButton.Rectangle.Medium>;

const Template: ComponentStory<typeof BlueButton.Rectangle.Medium> = () => (
  <>
    <BlueButton.Rectangle.Medium>
      <Icon.Large as={Brightness6} />
      버튼 테스트 1
    </BlueButton.Rectangle.Medium>
    <BlueButton.Rectangle.Medium>버튼 테스트 2</BlueButton.Rectangle.Medium>
    <BlueButton.Rectangle.Medium>
      <Icon.Large as={Brightness6} />
    </BlueButton.Rectangle.Medium>
  </>
);

export const Default = Template.bind({});
