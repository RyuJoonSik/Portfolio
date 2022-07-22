import { css } from "styled-components";

/**
 *폰트 사이즈를 설정합니다.
 */
const FONT_SIZE = {
  /**
   * ```css
   * font-size: 12px;
   * ```
   */
  SMALLEST: css`
    font-size: 12px;
  `,
  /**
   * ```css
   * font-size: 14px;
   * ```
   */
  SMALL: css`
    font-size: 14px;
  `,
  /**
   * ```css
   * font-size: 16px;
   * ```
   */
  DEFAULT: css`
    font-size: 16px;
  `,
  /**
   * ```css
   * font-size: 20px;
   * ```
   */
  LARGE: css`
    font-size: 20px;
  `,
  /**
   * ```css
   * font-size: 24px;
   * ```
   */
  LARGEST: css`
    font-size: 24px;
  `,
} as const;

export default FONT_SIZE;
