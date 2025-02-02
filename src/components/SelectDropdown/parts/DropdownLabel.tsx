import { twMerge } from 'tailwind-merge';
import { DropdownLabelProps } from '../types';

export const DropdownLabel = ({
  optionLabel,
  labelClassName,
  DropdownLabel,
}: {
  optionLabel?: string;
  labelClassName?: string;
  DropdownLabel?: (props: DropdownLabelProps) => JSX.Element;
}) => {
  if (DropdownLabel) {
    return (
      <div className="rs-flex-[1]">
        <DropdownLabel optionLabel={optionLabel} />
      </div>
    );
  }

  return optionLabel ? (
    <label
      htmlFor="dropdown"
      className={twMerge('rs-flex-[1]', labelClassName)}
    >
      {optionLabel}
    </label>
  ) : null;
};
