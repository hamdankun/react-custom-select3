import { useEffect } from 'react';

/**
 * Hook to handle mouse events outside a dropdown
 * @param dropdownRef - Reference to the dropdown element
 * @param callback - Function to execute when clicking outside
 */
export const useMouseEvents = (
  dropdownRef: React.RefObject<HTMLDivElement>,
  callback: () => void,
) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
};
