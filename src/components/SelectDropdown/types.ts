/**
 * Represents an option in the dropdown with a label and a value.
 */
export type SelectValue<T> = { label: string; value: T };

export type SingleAndMultipleValue<T> =
  | SelectValue<T>
  | Array<SelectValue<T>>
  | null
  | undefined;

export type DropdownOptionProps<T> = {
  option: SelectValue<T>;
  isSelected: boolean;
};

export type DropdownSelectedItemProps<T> = {
  value?: Array<SelectValue<T>> | SelectValue<T>;
  onDelete: (e: React.MouseEvent<HTMLButtonElement>, index: number) => void;
};

export type InnerProps<T> = {
  innerProps: SelectDropdownProps<T>;
};

export type DropdownComponentProps<T> = {
  options: Array<SelectValue<T>>;
  onSelect: (value: SelectValue<T>) => void;
};

export type DropdownLabelProps = {
  optionLabel?: string;
};

type SelectSingleProps<T> = {
  /**
   * Whether the dropdown allows multiple selections.
   */
  multiple: false;

  /**
   * event handler for the `onChange` event of the component.
   * @param value
   * @returns
   */
  onChange?: (value: SelectValue<T>) => void;
} & CommonSelectProps<T>;

type SelectMultipleProps<T> = {
  /**
   * Whether the dropdown allows multiple selections.
   */
  multiple: true;

  /**
   * event handler for the `onChange` event of the component.
   * @param value
   * @returns
   */
  onChange?: (value: Array<SelectValue<T>>) => void;
} & CommonSelectProps<T>;

type CommonSelectProps<T> = {
  /**
   * The id of the component.
   */
  id?: string;

  /**
   * Whether the dropdown is open by default.
   */
  defaultOpen?: boolean;

  /**
   * Whether the dropdown has a search input.
   */
  withSearch?: boolean;
  /**
   * The options to display in the dropdown.
   */
  options: Array<SelectValue<T>>;
  /**
   * The label for the dropdown.
   */
  optionLabel?: string;
  /**
   * Whether the dropdown is outlined.
   */
  outlined?: boolean;
  /**
   * The placeholder for the dropdown.
   */
  placeholder?: string;
  /**
   * The default value of the dropdown.
   */
  defaultValue?: Array<SelectValue<T>> | SelectValue<T> | null;
  /**
   *  The value of the dropdown.
   */
  value?: Array<SelectValue<T>> | SelectValue<T> | null;

  /**
   * The class name for the container of the component.
   */
  containerClassName?: string;

  /**
   * The class name for the label of the component.
   */
  labelClassName?: string;

  /**
   * The class name for the dropdown of the component.
   */
  dropdownClassName?: string;

  /**
   * Custom components for the dropdown.
   */
  components?: Partial<{
    DropdownLabel: (props: DropdownLabelProps) => JSX.Element;
    DropdownSelectedItem: (props: DropdownSelectedItemProps<T>) => JSX.Element;
    Dropdown: (props: DropdownComponentProps<T>) => JSX.Element;
    DropdownOption: (props: DropdownOptionProps<T>) => JSX.Element;
  }>;
};
/**
 * Props for the SelectDropdown component.
 */
export type SelectDropdownProps<T> =
  | SelectMultipleProps<T>
  | SelectSingleProps<T>;
