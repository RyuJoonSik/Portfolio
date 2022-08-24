import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import VericallContentContainer from "./VericallContentContainer";

export default {
  title: "Atoms/Box/VericallContentContainer ",
  component: VericallContentContainer,
} as ComponentMeta<typeof VericallContentContainer>;

const Template: ComponentStory<typeof VericallContentContainer> = () => (
  <VericallContentContainer>
    <div>수평 방향 컨텐츠 테스트 박스 1</div>
    <div>수평 방향 컨텐츠 테스트 박스 2</div>
    <div>수평 방향 컨텐츠 테스트 박스 3</div>
  </VericallContentContainer>
);

export const Default = Template.bind({});
