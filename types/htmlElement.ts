export type HTMLFocusableElements =
  | HTMLButtonElement
  | HTMLAnchorElement
  | HTMLTextAreaElement
  | HTMLInputElement;

export type HTMLInputElements = HTMLInputElement | HTMLTextAreaElement;

export type HTMLInputFileElement = HTMLInputElement & { files: FileList };
