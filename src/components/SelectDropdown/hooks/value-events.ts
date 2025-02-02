import { useEffect } from 'react';
import { SingleAndMultipleValue } from '../types';
import { resolveDefaultValue } from '../utils/dropdown';

/**
 * A custom hook that manages value events for a select component
 * @template T - The type of the value
 * @param defaultValue - The initial default value for the select
 * @param value - The current value of the select
 * @param multiple - Boolean flag indicating if multiple selection is allowed
 * @param setValue - React state setter function to update the select value
 *
 * @remarks
 * This hook handles two scenarios:
 * 1. Updates the internal state when the external value changes
 * 2. Sets the initial value based on default value when the component mounts
 */
export const useValueEvents = <T>(
  defaultValue: SingleAndMultipleValue<T>,
  value: SingleAndMultipleValue<T>,
  selectValue: SingleAndMultipleValue<T>,
  multiple: boolean,
  setValue: React.Dispatch<React.SetStateAction<SingleAndMultipleValue<T>>>,
) => {
  useEffect(() => {
    setValue(value);
  }, [value]);

  // useEffect(() => {
  //   if (value !== undefined && value !== selectValue) {
  //     setValue(value);
  //   }
  // }, [selectValue]);

  useEffect(() => {
    setValue(resolveDefaultValue(multiple, defaultValue, value));
  }, []);
};
