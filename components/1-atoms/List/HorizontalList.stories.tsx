import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HorizontalList from "./HorizontalList";

export default {
  title: "Atoms/List/HorizontalList",
  component: HorizontalList,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof HorizontalList>;

const Template: ComponentStory<typeof HorizontalList> = () => (
  <HorizontalList>
    <li>테스트 박스 1</li>
    <li>테스트 박스 2</li>
    <li>테스트 박스 3</li>
  </HorizontalList>
);

export const Default = Template.bind({});
