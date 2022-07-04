import React from "react";
import styled from "styled-components";
import { School } from "@styled-icons/material-sharp/School";

import { ProfileItemBox, ProfileItemContentBox } from "../../0-base/Box";
import { H3 } from "../../0-base/Heading";
import { MainIcon } from "../../0-base/Icon";

const Icon = styled(MainIcon).attrs({
  as: School,
})``;

const Group = styled(ProfileItemContentBox)`
  display: flex;
  flex-wrap: wrap;
`;

const Paragraph = styled.p`
  width: 50%;
`;

export default function ProfileEducationAndCertificateItem(): JSX.Element {
  return (
    <ProfileItemBox>
      <H3>
        <Icon />
        Education & Certificate
      </H3>
      <Group>
        <Paragraph>정보처리 산업기사</Paragraph>
        <Paragraph>정보처리 산업기사</Paragraph>
        <Paragraph>정보처리 산업기사</Paragraph>
        <Paragraph>정보처리 산업기사</Paragraph>
      </Group>
    </ProfileItemBox>
  );
}
