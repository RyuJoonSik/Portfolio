import { css } from "styled-components";

/**
 * 박스 내부 컨텐츠들의 정렬 위치를 설정합니다.
 */
export const contentAlign = {
  /**
   * ```css
   * justify-content: center;
   * align-items: center;
   * ```
   */
  center: css`
    justify-content: center;
    align-items: center;
  `,

  /**
   * ```css
   * justify-content: center;
   * align-items: flex-start;
   * ```
   */
  centerStart: css`
    justify-content: center;
    align-items: flex-start;
  `,

  /**
   * ```css
   * justify-content: flex-start;
   * align-items: center;
   * ```
   */
  startCenter: css`
    justify-content: flex-start;
    align-items: center;
  `,

  /**
   * ```css
   * justify-content: flex-end;
   * align-items: center;
   * ```
   */
  endCenter: css`
    justify-content: flex-end;
    align-items: center;
  `,

  /**
   * ```css
   * justify-content: space-between;
   * align-items: center;
   * ```
   */
  spaceBetweenCenter: css`
    justify-content: space-between;
    align-items: center;
  `,
};

export default contentAlign;
