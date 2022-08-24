/**
 * padding, maring, gap, border, border radius의 너비를 설정합니다.
 */

interface SpaceSize {
  smallest: string;
  smaller: string;
  small: string;
  medium: string;
  larger: string;
  largest: string;
}

export type SpaceSizeLiteral = keyof SpaceSize;

const spaceSize = {
  /**
   * ```
    1px
   * ```
   */
  smallest: "1px",
  /**
   * ```
    4px
   * ```
   */
  smaller: "4px",
  /**
   * ```
    10px
   * ```
   */
  small: "10px",
  /**
   * ```
    16px
   * ```
   */
  medium: "16px",
  /**
   * ```
    20px
   * ```
   */
  large: "20px",
  /**
   * ```
    24px
   * ```
   */
  larger: "24px",
  /**
   * ```
    32px
   * ```
   */
  largest: "32px",
} as const;

export default spaceSize;
