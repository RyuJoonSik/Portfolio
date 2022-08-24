import { css } from "styled-components";

/**
 * 스크롤의 가시성을 설정합니다.
 */
const scroll = {
  /**
   * 숨김
   * ```css
   *-ms-overflow-style: none;
   *scrollbar-width: none;
   *
   *&::-webkit-scrollbar {
   *  display: none;
   *}
   * ```
   */

  hidden: css`
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      /* Hide scrollbar for Chrome, Safari and Opera */
      display: none;
    }
  `,
};

export default scroll;
