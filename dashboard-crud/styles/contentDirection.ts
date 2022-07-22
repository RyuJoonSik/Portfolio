import { css } from "styled-components";

/**
 * 박스 내부 컨텐츠들의 배치 방향을 설정합니다.
 */
const CONTENT_DIRECTION = {
  /**
   * 수평 배치
   * ```css
   * display: flex;
   * flex-direction: row;
   * ```
   */
  HORIZONTAL: css`
    display: flex;
    flex-direction: row;
  `,

  /**
   * 수직 배치
   * ```css
   * display: flex;
   * flex-direction: column;
   * ```
   */
  VERTICAL: css`
    display: flex;
    flex-direction: column;
  `,
} as const;

export default CONTENT_DIRECTION;
