import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Face } from "@styled-icons/material-sharp/Face";
import { Construction } from "@styled-icons/material-sharp/Construction";
import { School } from "@styled-icons/material-sharp/School";

import SectionHeader from "./SectionHeader";
import Icon from "../Icon/Icon";

export default {
  title: "Atoms/Header/SectionHeader",
  component: SectionHeader,
} as ComponentMeta<typeof SectionHeader>;

const Template: ComponentStory<typeof SectionHeader> = () => (
  <>
    <SectionHeader>
      <Icon.Large as={Face} />
      <h3>About me</h3>
    </SectionHeader>
    <SectionHeader>
      <Icon.Large as={Construction} />
      <h3>Skills</h3>
    </SectionHeader>
    <SectionHeader>
      <Icon.Large as={School} />
      <h3>Education & Certificate</h3>
    </SectionHeader>
    <SectionHeader>
      <h3>안녕하세요</h3>
    </SectionHeader>
  </>
);

export const Default = Template.bind({});
