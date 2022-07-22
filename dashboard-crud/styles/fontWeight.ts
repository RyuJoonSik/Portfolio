import { css } from "styled-components";

/**
 * 폰트 굵기를 설정합니다.
 */
const FONT_WEIGHT = {
  /**
   * ```css
   * font-weight: 400;
   * ```
   */
  REGULAR: css`
    font-weight: 400;
  `,
  /**
   * ```css
   * font-weight: 500;
   * ```
   */
  MEDIUM: css`
    font-weight: 500;
  `,
  /**
   * ```css
   * font-weight: 700;
   * ```
   */
  BOLD: css`
    font-weight: 700;
  `,
};

export default FONT_WEIGHT;
