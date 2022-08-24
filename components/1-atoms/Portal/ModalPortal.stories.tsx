import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ModalPortal from "./ModalPortal";

export default {
  title: "Atoms/Portal/ModalPortal",
  component: ModalPortal,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof ModalPortal>;

const Template: ComponentStory<typeof ModalPortal> = () => (
  <ModalPortal>this is modal portal</ModalPortal>
);

export const Default = Template.bind({});
