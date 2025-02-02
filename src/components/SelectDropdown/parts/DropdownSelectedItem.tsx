import {
  DropdownSelectedItemProps as GenericDropdownSelectedItemProps,
  SelectValue,
} from '../types';

import ChevronDown from '../icons/svg/ChevronDown';
import { DropdownMultipleSelectedItem } from './DropdownMultipleSelectedItem';
import {
  getValueAsMultiple,
  getValueAsSingle,
  isSelectValueEmpty,
} from '../utils/dropdown';
import { twMerge } from 'tailwind-merge';
import { DropdownPlaceholder } from './DropdownPlaceholder';
import useResizeObserver from '../hooks/use-resize-observer';

type DropdownSelectedItemProps<T> = {
  multiple: boolean;
  outlined: boolean;
  value?: Array<SelectValue<T>> | SelectValue<T> | null;
  placeholder?: string;
  toggleDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  onDelete: (e: React.MouseEvent<HTMLButtonElement>, index: number) => void;
  onDropdownResize: (height: number) => void;
  DropdownSelectedItem?: (
    props: GenericDropdownSelectedItemProps<T>,
  ) => JSX.Element;
};

export const DropdownSelectedItem = <T,>({
  multiple,
  outlined,
  value,
  placeholder,
  toggleDropdown,
  onDelete,
  onDropdownResize,
  DropdownSelectedItem,
}: DropdownSelectedItemProps<T>) => {
  const singleValue = getValueAsSingle(value);
  const multipleValue = getValueAsMultiple(value);
  const { ref } = useResizeObserver(onDropdownResize);

  const renderNormalDropdownSelectedComponent = () => (
    <div>
      {isSelectValueEmpty(multiple, value) && (
        <DropdownPlaceholder placeholder={placeholder} />
      )}
      {!multiple && singleValue && (
        <span className="rs3-text-gray-600">{singleValue?.label}</span>
      )}
      {multiple && multipleValue.length > 0 && (
        <DropdownMultipleSelectedItem
          items={multipleValue}
          handleDelete={onDelete}
        />
      )}
    </div>
  );

  return (
    <div
      className={twMerge(
        'rs3-input-container rs3-border rs3-border-gray-200 rs3-rounded-md rs3-p-1 rs3-cursor-pointer rs3-flex rs3-justify-between rs3-items-center rs3-gap-3 rs3-min-h-10',
        outlined && 'outlined-active rs3-bg-gray-200',
        !outlined && 'rs3-bg-white',
      )}
      ref={ref}
      onClick={() => toggleDropdown((prev) => !prev)}
    >
      {DropdownSelectedItem ? (
        <DropdownSelectedItem
          value={singleValue || multipleValue}
          onDelete={onDelete}
        />
      ) : (
        renderNormalDropdownSelectedComponent()
      )}
      <ChevronDown />
    </div>
  );
};
