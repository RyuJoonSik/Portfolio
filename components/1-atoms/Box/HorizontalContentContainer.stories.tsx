import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HorizontalContentContainer from "./HorizontalContentContainer";

export default {
  title: "Atoms/Box/HorizontalContentContainer ",
  component: HorizontalContentContainer,
} as ComponentMeta<typeof HorizontalContentContainer>;

const Template: ComponentStory<typeof HorizontalContentContainer> = () => (
  <HorizontalContentContainer>
    <div>수평 방향 컨텐츠 테스트 박스 1</div>
    <div>수평 방향 컨텐츠 테스트 박스 2</div>
    <div>수평 방향 컨텐츠 테스트 박스 3</div>
  </HorizontalContentContainer>
);

export const Default = Template.bind({});
