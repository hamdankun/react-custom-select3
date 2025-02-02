import { SelectValue, SingleAndMultipleValue } from '../types';
export declare const getValueAsSingle: <T>(
  value: SingleAndMultipleValue<T>,
) => SelectValue<T> | null;
export declare const getValueAsMultiple: <T>(
  value: SingleAndMultipleValue<T>,
) => SelectValue<T>[];
export declare const resolveDefaultValue: <T>(
  multiple: boolean,
  initialValue: SelectValue<T> | SelectValue<T>[] | null | undefined,
  runtimeValue: SelectValue<T> | SelectValue<T>[] | null | undefined,
) => SelectValue<T> | SelectValue<T>[] | null | undefined;
export declare const isSelectValueEmpty: <T>(
  multiple: boolean,
  value: SingleAndMultipleValue<T>,
) => boolean;
//# sourceMappingURL=dropdown.d.ts.map
