import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Face } from "@styled-icons/material-sharp/Face";
import { Construction } from "@styled-icons/material-sharp/Construction";
import { School } from "@styled-icons/material-sharp/School";
import styled from "styled-components";

import MainContentItemHeader from "./MainContentItemHeader";
import H3 from "../Heading/H3";
import MediumIcon from "../Icon/MediumIcon";
import FONT_SIZE from "../../../styles/fontSize";

export default {
  title: "Atoms/MainContentItemHeader",
  component: MainContentItemHeader,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MainContentItemHeader>;

const Temp = styled.div`
  width: 100%;
`;

const Time = styled.time`
  ${FONT_SIZE.SMALL};
`;

const Template: ComponentStory<typeof MainContentItemHeader> = () => (
  <>
    <MainContentItemHeader>
      <MediumIcon as={Face} />
      <H3>About me</H3>
    </MainContentItemHeader>
    <MainContentItemHeader>
      <MediumIcon as={Construction} />
      <H3>Skills</H3>
    </MainContentItemHeader>
    <MainContentItemHeader>
      <MediumIcon as={School} />
      <H3>Education & Certificate</H3>
    </MainContentItemHeader>
    <MainContentItemHeader>
      <H3>안녕하세요!</H3>
      <Temp>
        <Time>2022-07-23</Time>
      </Temp>
    </MainContentItemHeader>
  </>
);

export const Default = Template.bind({});
