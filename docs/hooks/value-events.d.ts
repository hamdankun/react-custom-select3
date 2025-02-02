import { SingleAndMultipleValue } from '../types';
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
export declare const useValueEvents: <T>(
  defaultValue: SingleAndMultipleValue<T>,
  value: SingleAndMultipleValue<T>,
  multiple: boolean,
  setValue: import('../../../../node_modules/react').Dispatch<
    import('../../../../node_modules/react').SetStateAction<
      SingleAndMultipleValue<T>
    >
  >,
) => void;
//# sourceMappingURL=value-events.d.ts.map
