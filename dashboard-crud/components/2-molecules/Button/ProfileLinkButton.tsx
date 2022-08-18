import React from "react";
import { AccountCircle } from "@styled-icons/material-outlined/AccountCircle";

import Icon from "../../1-atoms/Icon/Icon";
import PageHeaderLinkButton from "../../1-atoms/Button/PageHeaderLinkButton";

export default function ProfileLinkButton(): JSX.Element {
  return (
    <PageHeaderLinkButton to="profile">
      <Icon.Large as={AccountCircle} />
      프로필
    </PageHeaderLinkButton>
  );
}
