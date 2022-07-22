import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainDefaultContentItemContainer from "./MainDefaultContentItemContainer";
import Main from "../Main/Main";
import MainContentContainer from "./MainContentContainer";
import H3 from "../Heading/H3";

export default {
  title: "Atoms/MainDefaultContentItemContainer",
  component: MainDefaultContentItemContainer,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MainDefaultContentItemContainer>;

const Template: ComponentStory<typeof MainDefaultContentItemContainer> = () => (
  <Main>
    <MainContentContainer>
      <MainDefaultContentItemContainer>
        <H3>테스트</H3>
      </MainDefaultContentItemContainer>
    </MainContentContainer>
  </Main>
);

export const Default = Template.bind({});
