import { SelectValue, SingleAndMultipleValue } from '../types';

export const getValueAsSingle = <T>(value: SingleAndMultipleValue<T>) => {
  const keys = Object.keys(value || {});
  if (!keys.includes('label') || !keys.includes('value')) {
    return null;
  }

  return value as SelectValue<T>;
};

export const getValueAsMultiple = <T>(
  value: SingleAndMultipleValue<T>,
): Array<SelectValue<T>> => (Array.isArray(value) ? value : []);

export const resolveDefaultValue = <T>(
  multiple: boolean,
  initialValue: SelectValue<T> | Array<SelectValue<T>> | undefined | null,
  runtimeValue: SelectValue<T> | Array<SelectValue<T>> | undefined | null,
) => {
  if (!initialValue && !runtimeValue) {
    return multiple ? [] : null;
  }

  return runtimeValue || initialValue;
};

export const isSelectValueEmpty = <T>(
  multiple: boolean,
  value: SingleAndMultipleValue<T>,
) => {
  if (multiple) {
    return getValueAsMultiple(value).length <= 0;
  }

  return !getValueAsSingle(value);
};
