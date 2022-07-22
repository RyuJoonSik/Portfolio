import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Face } from "@styled-icons/material-sharp/Face";
import { Construction } from "@styled-icons/material-sharp/Construction";
import { School } from "@styled-icons/material-sharp/School";

import H3 from "./H3";
import MediumIcon from "../Icon/MediumIcon";

export default {
  title: "Atoms/H3",
  component: H3,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof H3>;

const Template: ComponentStory<typeof H3> = () => (
  <>
    <H3>
      <MediumIcon as={Face} />
      About me
    </H3>
    <H3>
      <MediumIcon as={Construction} />
      Skills
    </H3>
    <H3>
      <MediumIcon as={School} />
      Education & Certificate
    </H3>
    <H3>안녕하세요!</H3>
  </>
);

export const Default = Template.bind({});
