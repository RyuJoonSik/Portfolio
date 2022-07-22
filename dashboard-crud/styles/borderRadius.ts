import { css } from "styled-components";

/**
 * 박스 모서리의 둥근 정도를 설정합니다.
 */
export const BORDER_RADIUS = {
  /**
   * ```css
   * overflow: visible;
   *
   * border-radius: 0;
   * ```
   */
  NONE: css`
    overflow: visible;

    border-radius: 0;
  `,

  /**
   * ```css
   * overflow: hidden;
   *
   * border-radius: 4px;
   * ```
   */
  DEFAULT: css`
    overflow: hidden;

    border-radius: 4px;
  `,

  /**
   * ```css
   * overflow: hidden;
   *
   * border-radius: 10px;
   * ```
   */
  LARGET: css`
    overflow: hidden;

    border-radius: 10px;
  `,
};

export default BORDER_RADIUS;
