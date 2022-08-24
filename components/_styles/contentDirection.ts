import { css, FlattenSimpleInterpolation } from "styled-components";

interface ContentDirection {
  horizontal: FlattenSimpleInterpolation;
  vertical: FlattenSimpleInterpolation;
}

export type ContentDirectionLiteral = keyof ContentDirection;

/**
 * 박스 내부 컨텐츠들의 배치 방향을 설정합니다.
 */
const contentDirection = {
  /**
   * 수평 배치
   * ```css
   * display: flex;
   * flex-direction: row;
   * ```
   */
  horizontal: css`
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
  vertical: css`
    display: flex;
    flex-direction: column;
  `,
} as const;

export default contentDirection;
