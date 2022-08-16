import React from "react";
import { NearMe } from "@styled-icons/material-outlined/NearMe";

import Icon from "../../1-atoms/Icon/Icon";
import PageHeaderButton from "./PageHeaderButton";

export default function DailyLifeLinkButton(): JSX.Element {
  return (
    <PageHeaderButton.Link to="/daily-life">
      <Icon.Large as={NearMe} />
      일상
    </PageHeaderButton.Link>
  );
}
