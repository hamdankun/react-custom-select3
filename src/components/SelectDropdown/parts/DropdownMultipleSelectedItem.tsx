import Close from '../icons/svg/Close';
import { SelectValue } from '../types';

export const DropdownMultipleSelectedItem = <T,>({
  items,
  handleDelete,
}: {
  items: Array<SelectValue<T>>;
  handleDelete: (e: React.MouseEvent<HTMLButtonElement>, index: number) => void;
}) => (
  <div className="rs3-flex rs3-gap-2 rs3-flex-wrap">
    {items.map((item, key) => (
      <div
        key={key}
        className="rs3-bg-gray-100 rs3-p-1 rs3-rounded-full rs3-flex rs3-items-center rs3-gap-2"
      >
        <span className="rs3-text-gray-600">{item.label}</span>
        <button
          className="rs3-cursor-pointer p-0 m-0"
          onClick={(e) => handleDelete(e, key)}
        >
          <Close />
        </button>
      </div>
    ))}
  </div>
);
