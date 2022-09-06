import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AccountCircle } from "@styled-icons/material-outlined/AccountCircle";
import { Login } from "@styled-icons/material-sharp/Login";
import { Logout } from "@styled-icons/material-sharp/Logout";
import { NearMe } from "@styled-icons/material-outlined/NearMe";

import PageHeaderButton from "./PageHeaderButton";
import CustomContainer from "../Container/CustomContainer";

export default {
  title: "Atoms/Button/PageHeaderButton",
  component: PageHeaderButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof PageHeaderButton>;

const Template: ComponentStory<typeof PageHeaderButton> = () => (
  <CustomContainer>
    <CustomContainer direction="vertical" gap="medium">
      <div>With Name</div>
      <PageHeaderButton Icon={AccountCircle} buttonName="프로필" />
      <PageHeaderButton Icon={Login} buttonName="로그인" />
      <PageHeaderButton Icon={Logout} buttonName="로그아웃" />
      <PageHeaderButton Icon={NearMe} buttonName="일상" />
    </CustomContainer>
    <CustomContainer direction="vertical" gap="medium">
      <div>No Name</div>
      <PageHeaderButton Icon={AccountCircle} />
      <PageHeaderButton Icon={Login} />
      <PageHeaderButton Icon={Logout} />
      <PageHeaderButton Icon={NearMe} />
    </CustomContainer>
  </CustomContainer>
);

export const Default = Template.bind({});
