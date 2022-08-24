import React from "react";
import { Face } from "@styled-icons/material-sharp/Face";

import ProfileItem from "./ProfileItem";

export default function ProfileAboutMeItem(): JSX.Element {
  return (
    <ProfileItem title="About Me" TitleIcon={Face}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
      repellendus, quidem animi ducimus praesentium odio eveniet quae doloribus
      necessitatibus ab cum itaque et amet provident, ex adipisci ut incidunt
      sit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
      repellendus, quidem animi ducimus praesentium odio eveniet quae doloribus
      necessitatibus ab cum itaque et amet provident, ex adipisci ut incidunt
      sit.
    </ProfileItem>
  );
}
