import { css } from "styled-components";

/**
 * 박스 내부 컨텐츠들의 정렬 위치를 설정합니다.
 */
export const CONTENT_ALIGN = {
  /**
   * ```css
   * justify-content: center;
   * align-items: center;
   * ```
   */
  CENTER: css`
    justify-content: center;
    align-items: center;
  `,

  /**
   * ```css
   * justify-content: center;
   * align-items: flex-start;
   * ```
   */
  CENTER_START: css`
    justify-content: center;
    align-items: flex-start;
  `,

  /**
   * ```css
   * justify-content: flex-start;
   * align-items: center;
   * ```
   */
  START_CENTER: css`
    justify-content: flex-start;
    align-items: center;
  `,

  /**
   * ```css
   * justify-content: flex-end;
   * align-items: center;
   * ```
   */
  END_CENTER: css`
    justify-content: flex-end;
    align-items: center;
  `,

  /**
   * ```css
   * justify-content: space-between;
   * align-items: center;
   * ```
   */
  SPACE_BETWEEN_CENTER: css`
    justify-content: space-between;
    align-items: center;
  `,
};

export default CONTENT_ALIGN;
