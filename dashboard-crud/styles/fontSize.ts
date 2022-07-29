import { css } from "styled-components";

/**
 *폰트 사이즈를 설정합니다.
 */
const FONT_SIZE = {
  /**
   * ```css
   * font-size: 10px;
   * ```
   */
  SMALLEST: css`
    font-size: 10px;
  `,
  /**
   * ```css
   * font-size: 12px;
   * ```
   */
  SMALLER: css`
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
  LARGER: css`
    font-size: 24px;
  `,
  /**
   * ```css
   * font-size: 28px;
   * ```
   */
  LARGEST: css`
    font-size: 28px;
  `,
} as const;

export default FONT_SIZE;
