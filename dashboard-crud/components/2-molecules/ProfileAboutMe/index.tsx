import React from "react";
import { Face } from "@styled-icons/material-sharp/Face";

import MainContentItemBox from "../../1-atoms/MainContentItemBox";
import MainContentTitle from "../../1-atoms/MainContentTitle";
import MainContentParagraph from "../../1-atoms/MainContentParagraph";

const TEXT_CONTENT = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
repellendus, quidem animi ducimus praesentium odio eveniet quae doloribus
necessitatibus ab cum itaque et amet provident, ex adipisci ut incidunt
sit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
repellendus, quidem animi ducimus praesentium odio eveniet quae doloribus
necessitatibus ab cum itaque et amet provident, ex adipisci ut incidunt
sit.
`;

export default function ProfileAboutMe(): JSX.Element {
  return (
    <MainContentItemBox>
      <MainContentTitle title="About me" Icon={Face} />
      <MainContentParagraph textContent={TEXT_CONTENT} />
    </MainContentItemBox>
  );
}
