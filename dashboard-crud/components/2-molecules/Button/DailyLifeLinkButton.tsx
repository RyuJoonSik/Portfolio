import React from "react";
import { NearMe } from "@styled-icons/material-outlined/NearMe";

import Icon from "../../1-atoms/Icon/Icon";
import PageHeaderLinkButton from "../../1-atoms/Button/PageHeaderLinkButton";

export default function DailyLifeLinkButton(): JSX.Element {
  return (
    <PageHeaderLinkButton to="/daily-life">
      <Icon.Large as={NearMe} />
      일상
    </PageHeaderLinkButton>
  );
}
