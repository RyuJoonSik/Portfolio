import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ModalPortal from "./ModalPortal";

export default {
  title: "Atoms/Portal/ModalPortal",
  component: ModalPortal,
} as ComponentMeta<typeof ModalPortal>;

const Template: ComponentStory<typeof ModalPortal> = () => (
  <ModalPortal>ModalPortal</ModalPortal>
);

export const Default = Template.bind({});
