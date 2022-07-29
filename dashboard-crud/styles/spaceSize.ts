/**
 * padding, maring, gap, border, border radius의 너비를 설정합니다.
 */
const SPACE_SIZE = {
  /**
   * ```
    1px
   * ```
   */
  SMALLEST: "1px",
  /**
   * ```
    4px
   * ```
   */
  SMALLER: "4px",
  /**
   * ```
    10px
   * ```
   */
  SMALL: "10px",
  /**
   * ```
    16px
   * ```
   */
  DEFAULT: "16px",
  /**
   * ```
    20px
   * ```
   */
  LARGE: "20px",
  /**
   * ```
    24px
   * ```
   */
  LARGER: "24px",
  /**
   * ```
    32px
   * ```
   */
  LARGEST: "32px",
} as const;

export default SPACE_SIZE;
