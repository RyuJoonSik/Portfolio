import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainFullContentItemContainer from "./MainFullContentItemContainer";
import Main from "../Main/Main";
import MainContentContainer from "./MainContentContainer";
import H3 from "../Heading/H3";

export default {
  title: "Atoms/MainFullContentItemContainer",
  component: MainFullContentItemContainer,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MainFullContentItemContainer>;

const Template: ComponentStory<typeof MainFullContentItemContainer> = () => (
  <Main>
    <MainContentContainer>
      <MainFullContentItemContainer>
        <H3>테스트</H3>
      </MainFullContentItemContainer>
    </MainContentContainer>
  </Main>
);

export const Default = Template.bind({});
