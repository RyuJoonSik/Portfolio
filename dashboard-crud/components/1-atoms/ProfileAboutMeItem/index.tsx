import React from "react";
import styled from "styled-components";
import { Face } from "@styled-icons/material-sharp/Face";

import { ProfileItemBox } from "../../0-base/Box";
import { H3 } from "../../0-base/Heading";
import { MainIcon } from "../../0-base/Icon";
import { Paragraph } from "../../0-base/Paragraph";

const Icon = styled(MainIcon).attrs({
  as: Face,
})``;

export default function ProfileAboutMeItem(): JSX.Element {
  return (
    <ProfileItemBox>
      <H3>
        <Icon />
        About me
      </H3>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        repellendus, quidem animi ducimus praesentium odio eveniet quae
        doloribus necessitatibus ab cum itaque et amet provident, ex adipisci ut
        incidunt sit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Officiis repellendus, quidem animi ducimus praesentium odio eveniet quae
        doloribus necessitatibus ab cum itaque et amet provident, ex adipisci ut
        incidunt sit.
      </Paragraph>
    </ProfileItemBox>
  );
}
