import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainSmallContentItemContainer from "./MainSmallContentItemContainer";
import Main from "../Main/Main";
import MainContentContainer from "./MainContentContainer";
import H3 from "../Heading/H3";

export default {
  title: "Atoms/MainSmallContentItemContainer",
  component: MainSmallContentItemContainer,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MainSmallContentItemContainer>;

const Template: ComponentStory<typeof MainSmallContentItemContainer> = () => (
  <Main>
    <MainContentContainer>
      <MainSmallContentItemContainer>
        <H3>테스트</H3>
      </MainSmallContentItemContainer>
    </MainContentContainer>
  </Main>
);

export const Default = Template.bind({});
