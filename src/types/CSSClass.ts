export type CSSClassKeyValuePair = {
  [key: string]: CSSClass
};

export type CSSClasses = CSSClass[];

export type CSSClass =
  | CSSClassKeyValuePair
  | string
  | CSSClasses
  | undefined
  | null
  | boolean
  | ((modifiers: {
    clear: () => void
    add: (cssClass: string) => void
    remove: (cssClass: string) => void
  }) => void);

export type CSSRawClassesList<ClassesKeys extends string = string> = {
  [key in ClassesKeys]?: CSSClass
};

export type CSSClassesList<ClassesKeys extends string = string> = {
  [key in ClassesKeys]?: CSSClass
};
