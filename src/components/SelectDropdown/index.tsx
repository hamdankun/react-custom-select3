import React, { useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import './styles.css';

// parts of components
import { DropdownLabel } from './parts/DropdownLabel';
import { DropdownSelectedItem } from './parts/DropdownSelectedItem';
import { DropdownOptions } from './parts/DropdownOptions';

import { SelectDropdownProps, SelectValue } from './types';
import { useMouseEvents } from './hooks/mouse-events';
import { getValueAsMultiple, getValueAsSingle } from './utils/dropdown';
import { useValueEvents } from './hooks/value-events';

export const SelectDropdown = <T,>(props: SelectDropdownProps<T>) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const {
    id,
    optionLabel,
    placeholder,
    options,
    multiple = false,
    withSearch = true,
    outlined = false,
    defaultOpen = false,
    onChange,
    containerClassName,
    labelClassName,
    dropdownClassName,
    value,
    defaultValue,
    components,
  } = props;

  const {
    Dropdown: CustomDropdown,
    DropdownLabel: CustomDropdownLabel,
    DropdownOption: CustomDropdownOption,
    DropdownSelectedItem: CustomDropdownSelectedItem,
  } = components || {};

  const [selectValue, setValue] = useState<SelectDropdownProps<T>['value']>();
  const [showDropdown, toggleDropdown] = useState(defaultOpen);
  const [dropdownHeight, setDropdownHeight] = useState(0);

  const isSelected = (selected: T) => {
    if (!multiple) {
      return getValueAsSingle(selectValue)?.value === selected;
    }

    return getValueAsMultiple(selectValue)?.some(
      (item) => item.value === selected,
    );
  };

  useMouseEvents(dropdownRef, () => toggleDropdown(false));
  useValueEvents(defaultValue, value, selectValue, multiple, setValue);

  const handleSelect = (option: SelectValue<T>) => {
    if (!multiple) {
      setValue(option);
      onChange?.(option as any);
      toggleDropdown(false);
      return;
    }

    const currentValues = getValueAsMultiple(selectValue);
    const nextValues = currentValues.find((item) => item.value === option.value)
      ? currentValues.filter((item) => item.value !== option.value)
      : [...currentValues, option];

    setValue(nextValues);
    onChange?.(nextValues as any);
  };

  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number,
  ) => {
    e.stopPropagation();
    toggleDropdown(false);
    const nextValues = getValueAsMultiple(selectValue)?.filter(
      (_, key) => key !== index,
    );
    setValue(nextValues);
    onChange?.(nextValues as any);
  };

  return (
    <div
      className={twMerge(
        'rs3-flex rs3-gap-3 rs3-items-center rs3-relative rs3-mb-2',
        multiple && 'select-multiple',
        containerClassName,
      )}
      style={{ height: dropdownHeight }}
      id={id}
    >
      <DropdownLabel
        optionLabel={optionLabel}
        labelClassName={labelClassName}
        DropdownLabel={CustomDropdownLabel}
      />
      <div
        className={twMerge(
          'rs3-relative rs3-flex rs3-flex-col rs3-gap-2 rs3-min-w-72 rs3-min-h-10 rs3-w-full',
          !!optionLabel && 'rs3-flex-[6]',
        )}
        ref={dropdownRef}
      >
        <div className="rs3-absolute rs3-w-full">
          <DropdownSelectedItem
            multiple={multiple}
            outlined={outlined}
            onDelete={handleDelete}
            placeholder={placeholder}
            toggleDropdown={toggleDropdown}
            value={selectValue}
            DropdownSelectedItem={CustomDropdownSelectedItem}
            onDropdownResize={(height) => setDropdownHeight(height)}
          />
          <DropdownOptions
            withSearch={withSearch}
            show={showDropdown}
            options={options}
            handleSelect={handleSelect}
            isSelected={isSelected}
            dropdownClassName={dropdownClassName}
            DropdownOptionComponent={CustomDropdownOption}
            DropdownComponent={CustomDropdown}
          />
        </div>
      </div>
    </div>
  );
};
