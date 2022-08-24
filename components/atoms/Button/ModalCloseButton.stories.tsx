import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ModalCloseButton from "./ModalCloseButton";

export default {
  title: "Atoms/Button/ModalCloseButton",
  component: ModalCloseButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof ModalCloseButton>;

const Template: ComponentStory<typeof ModalCloseButton> = () => (
  <ModalCloseButton>닫기</ModalCloseButton>
);

export const Default = Template.bind({});
