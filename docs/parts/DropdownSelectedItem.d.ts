import { SelectValue } from '../types';
type DropdownSelectedItemProps<T> = {
  multiple: boolean;
  outlined: boolean;
  value?: Array<SelectValue<T>> | SelectValue<T> | null;
  placeholder?: string;
  toggleDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  onDelete: (e: React.MouseEvent<HTMLButtonElement>, index: number) => void;
};
export declare const DropdownSelectedItem: {
  <T>({
    multiple,
    outlined,
    value,
    placeholder,
    toggleDropdown,
    onDelete,
  }: DropdownSelectedItemProps<T>): import('../../../../node_modules/react/jsx-runtime').JSX.Element;
  __docgenInfo: {
    description: string;
    methods: never[];
    displayName: string;
    props: {
      multiple: {
        required: boolean;
        tsType: {
          name: string;
        };
        description: string;
      };
      outlined: {
        required: boolean;
        tsType: {
          name: string;
        };
        description: string;
      };
      value: {
        required: boolean;
        tsType: {
          name: string;
          raw: string;
          elements: (
            | {
                name: string;
                elements: {
                  name: string;
                  type: string;
                  raw: string;
                  signature: {
                    properties: {
                      key: string;
                      value: {
                        name: string;
                        required: boolean;
                      };
                    }[];
                  };
                }[];
                raw: string;
                type?: undefined;
                signature?: undefined;
              }
            | {
                name: string;
                type: string;
                raw: string;
                signature: {
                  properties: {
                    key: string;
                    value: {
                      name: string;
                      required: boolean;
                    };
                  }[];
                };
                elements?: undefined;
              }
            | {
                name: string;
                elements?: undefined;
                raw?: undefined;
                type?: undefined;
                signature?: undefined;
              }
          )[];
        };
        description: string;
      };
      placeholder: {
        required: boolean;
        tsType: {
          name: string;
        };
        description: string;
      };
      toggleDropdown: {
        required: boolean;
        tsType: {
          name: string;
          raw: string;
          elements: {
            name: string;
            raw: string;
            elements: {
              name: string;
            }[];
          }[];
        };
        description: string;
      };
      onDelete: {
        required: boolean;
        tsType: {
          name: string;
          type: string;
          raw: string;
          signature: {
            arguments: (
              | {
                  type: {
                    name: string;
                    raw: string;
                    elements: {
                      name: string;
                    }[];
                  };
                  name: string;
                }
              | {
                  type: {
                    name: string;
                    raw?: undefined;
                    elements?: undefined;
                  };
                  name: string;
                }
            )[];
            return: {
              name: string;
            };
          };
        };
        description: string;
      };
    };
  };
};
export {};
//# sourceMappingURL=DropdownSelectedItem.d.ts.map
