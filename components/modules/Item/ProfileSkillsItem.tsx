import React from "react";
import { School } from "@styled-icons/material-sharp/School";

import ProfileItem from "./ProfileItem";

export default function ProfileSkillsItem(): JSX.Element {
  return (
    <ProfileItem title="Skills" TitleIcon={School}>
      <ul>
        <li>브라우저 환경에 맞추어 HTML, CSS, JavaScript를 작성합니다.</li>
        <li>컴포넌트 단위 UI 개발을 선호하며 주로 React를 사용합니다.</li>
        <li>코드를 더 빨리 파악할 수 있도록 TypeScript를 사용합니다.</li>
        <li>
          Jest, React Testing Library, Storybook으로 테스트 코드를 작성할 수
          있습니다.
        </li>
        <li>
          Babel, Webpack, ESLint와 같은 도구들을 개발 환경에 맞추어 사용합니다.
        </li>
      </ul>
    </ProfileItem>
  );
}
