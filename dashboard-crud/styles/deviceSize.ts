function createMediaQuerySizeString(
  size: string,
  minOrMax: "min" | "max" = "max"
): string {
  return `@media screen and (${minOrMax}-width: ${size})`;
}

export const TABLET_SIZE = createMediaQuerySizeString("768px");

export const MOBILE_SIZE = createMediaQuerySizeString("428px");
