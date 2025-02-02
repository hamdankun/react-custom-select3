import { SelectValue } from '../types';
export declare const DropdownMultipleSelectedItem: {
  <T>({
    items,
    handleDelete,
  }: {
    items: SelectValue<T>[];
    handleDelete: (
      e: React.MouseEvent<HTMLButtonElement>,
      index: number,
    ) => void;
  }): import('../../../../node_modules/react/jsx-runtime').JSX.Element;
  __docgenInfo: {
    description: string;
    methods: never[];
    displayName: string;
    props: {
      items: {
        required: boolean;
        tsType: {
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
        };
        description: string;
      };
      handleDelete: {
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
//# sourceMappingURL=DropdownMultipleSelectedItem.d.ts.map
