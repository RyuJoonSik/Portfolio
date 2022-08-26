import React from "react";
import { Face } from "@styled-icons/material-sharp/Face";

import ProfileItem from "./ProfileItem";

export default function ProfileIntroduceItem(): JSX.Element {
  return (
    <ProfileItem title="Introduce" TitleIcon={Face}>
      <ul>
        <li>
          다양한 사용자들을 만족시킬 수 있도록 변경에 유연한 설계를 목표로
          개발합니다.
        </li>
        <li>어떻게 하면 더 좋은 코드를 남길 수 있을지 고민하며 작성합니다.</li>
        <li>
          위 두 가지에 숙련되기 위해 언제나 더 나은 해답은 반드시 존재한다는
          마음가짐으로 반복적인 리팩토링과 학습을 진행하고 있습니다.
        </li>
      </ul>
    </ProfileItem>
  );
}
