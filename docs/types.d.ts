/**
 * Represents an option in the dropdown with a label and a value.
 */
export type SelectValue<T> = {
  label: string;
  value: T;
};
export type SingleAndMultipleValue<T> =
  | SelectValue<T>
  | Array<SelectValue<T>>
  | null
  | undefined;
export type DropdownOptionProps<T> = {
  item: SelectValue<T>;
  index: number;
  onSelect: (option: SelectValue<T>) => void;
};
//# sourceMappingURL=types.d.ts.map
