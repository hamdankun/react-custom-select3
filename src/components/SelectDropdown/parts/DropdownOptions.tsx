import { twMerge } from 'tailwind-merge';
import Search from '../icons/svg/Search';
import {
  DropdownComponentProps,
  DropdownOptionProps,
  InnerProps,
  SelectValue,
} from '../types';
import { useEffect, useState } from 'react';
import XCircle from '../icons/svg/XCircle';

const filterOptions = <T,>(
  options: Array<SelectValue<T>>,
  keyword: string,
): Array<SelectValue<T>> => {
  const normalizedKeyword = keyword.trim().toLowerCase();

  if (!normalizedKeyword) {
    return options;
  }

  return options?.filter((option) =>
    option.label.toLowerCase().includes(normalizedKeyword),
  );
};

const makeHighlightSearchText = (text: string, highlight: string) => {
  if (!highlight.trim()) {
    return text;
  }
  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, index) =>
    regex.test(part) ? (
      <span key={index} className="rs3-bg-teal-100">
        {part}
      </span>
    ) : (
      <span>{part}</span>
    ),
  );
};

export const DropdownOptions = <T,>({
  withSearch,
  show,
  options,
  handleSelect,
  isSelected,
  dropdownClassName,
  DropdownOptionComponent,
  DropdownComponent,
}: {
  withSearch: boolean;
  show: boolean;
  options: Array<SelectValue<T>>;
  handleSelect: (option: SelectValue<T>) => void;
  isSelected: (selected: T, index: number) => boolean;
  dropdownClassName?: string;
  DropdownComponent?: (props: DropdownComponentProps<T>) => JSX.Element;
  DropdownOptionComponent?: (props: DropdownOptionProps<T>) => JSX.Element;
}) => {
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.currentTarget.value);
  };

  const optionsFiltered = filterOptions(options, searchKeyword);

  const renderNormalDropdownComponent = () => (
    <ul className="rs3-bg-white rs3-max-h-72 rs3-overflow-x-auto">
      {!optionsFiltered?.length && (
        <li className="rs3-text-center rs3-text-gray-400 rs3-p-1.5">
          No Option
        </li>
      )}
      {optionsFiltered?.map((option, key) => (
        <li
          key={`${option?.value}-${key}`}
          className={twMerge(
            'rs3-cursor-pointer rs3-p-1.5 rs3-hover:bg-teal-50 rs3-truncate rs3-text-left rs3-text-gray-600',
            isSelected(option?.value, key) && 'rs3-bg-teal-50',
          )}
          onClick={() => handleSelect(option)}
        >
          {DropdownOptionComponent ? (
            <DropdownOptionComponent
              option={option}
              isSelected={isSelected(option?.value, key)}
            />
          ) : (
            makeHighlightSearchText(option?.label, searchKeyword)
          )}
        </li>
      ))}
    </ul>
  );

  useEffect(() => {
    if (!show) {
      setSearchKeyword('');
    }
  }, [show]);

  return show ? (
    <div
      className={twMerge(
        'dropdown rs3-border rs3-border-gray-200 rs3-absolute rs3-z-[2000] rs3-mt-2 rs3-w-full',
        dropdownClassName,
      )}
    >
      {withSearch && (
        <div className="rs3-flex rs3-border-b rs3-border-gray-200 rs3-p-2 rs3-items-center rs3-gap-2 rs3-justify-between rs3-bg-white">
          <div className="rs3-flex rs3-gap-2 rs3-items-center rs3-w-full">
            <Search />
            <input
              className="rs3-outline-0 rs3-w-full rs3-bg-white rs3-text-gray-600"
              placeholder="Search..."
              onChange={handleChange}
              value={searchKeyword}
            />
          </div>
          {searchKeyword !== '' && (
            <button
              onClick={() => setSearchKeyword('')}
              className="rs3-cursor-pointer"
            >
              <XCircle />
            </button>
          )}
        </div>
      )}

      {DropdownComponent ? (
        <DropdownComponent onSelect={handleSelect} options={options} />
      ) : (
        renderNormalDropdownComponent()
      )}
    </div>
  ) : null;
};
