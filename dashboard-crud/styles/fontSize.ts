import { css } from "styled-components";

/**
 *폰트 사이즈를 설정합니다.
 */
const fontSize = {
  /**
   * ```css
   * font-size: 10px;
   * ```
   */
  smallest: css`
    font-size: 10px;
  `,
  /**
   * ```css
   * font-size: 12px;
   * ```
   */
  smaller: css`
    font-size: 12px;
  `,
  /**
   * ```css
   * font-size: 14px;
   * ```
   */
  small: css`
    font-size: 14px;
  `,
  /**
   * ```css
   * font-size: 16px;
   * ```
   */
  medium: css`
    font-size: 16px;
  `,
  /**
   * ```css
   * font-size: 20px;
   * ```
   */
  large: css`
    font-size: 20px;
  `,
  /**
   * ```css
   * font-size: 24px;
   * ```
   */
  larger: css`
    font-size: 24px;
  `,
  /**
   * ```css
   * font-size: 28px;
   * ```
   */
  largest: css`
    font-size: 28px;
  `,
} as const;

export default fontSize;
