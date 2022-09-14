export type HTMLFocusableElements =
  | HTMLButtonElement
  | HTMLAnchorElement
  | HTMLTextAreaElement
  | HTMLInputElement;

export type HTMLInputFileElement = HTMLInputElement & { files: FileList };
