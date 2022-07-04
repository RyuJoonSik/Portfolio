import React from "react";
import styled from "styled-components";
import { Construction } from "@styled-icons/material-sharp/Construction";

import { ProfileItemBox } from "../../0-base/Box";
import { H3 } from "../../0-base/Heading";
import { MainIcon } from "../../0-base/Icon";
import { DescriptionList } from "../../0-base/DescriptionList";
import { DefinitionTerm } from "../../0-base/DefinitionTerm";
import { DefinitionDescription } from "../../0-base/DefinitionDescription";

const Icon = styled(MainIcon).attrs({
  as: Construction,
})``;

export default function ProfileSkillsItem(): JSX.Element {
  return (
    <ProfileItemBox>
      <H3>
        <Icon />
        Skills
      </H3>
      <DescriptionList>
        <DefinitionTerm>HTML</DefinitionTerm>
        <DefinitionDescription>
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </DefinitionDescription>
        <DefinitionDescription>
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </DefinitionDescription>
        <DefinitionDescription>
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </DefinitionDescription>
        <DefinitionTerm>CSS</DefinitionTerm>
        <DefinitionDescription>
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </DefinitionDescription>
        <DefinitionDescription>
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </DefinitionDescription>
        <DefinitionDescription>
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </DefinitionDescription>
        <DefinitionTerm>JavaScript</DefinitionTerm>
        <DefinitionDescription>
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </DefinitionDescription>
        <DefinitionDescription>
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </DefinitionDescription>
        <DefinitionDescription>
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </DefinitionDescription>
      </DescriptionList>
    </ProfileItemBox>
  );
}
