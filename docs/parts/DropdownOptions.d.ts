import { DropdownOptionProps, SelectValue } from '../types';
export declare const DropdownOptions: {
  <T>({
    withSearch,
    show,
    options,
    handleSelect,
    isSelected,
    dropdownClassName,
    DropdownOptionComponent,
  }: {
    withSearch: boolean;
    show: boolean;
    options: SelectValue<T>[];
    handleSelect: (option: SelectValue<T>) => void;
    isSelected: (selected: T, index: number) => boolean;
    dropdownClassName?: string | undefined;
    DropdownOptionComponent?:
      | ((props: DropdownOptionProps<T>) => JSX.Element)
      | undefined;
  }): import('../../../../node_modules/react/jsx-runtime').JSX.Element | null;
  __docgenInfo: {
    description: string;
    methods: never[];
    displayName: string;
    props: {
      withSearch: {
        required: boolean;
        tsType: {
          name: string;
        };
        description: string;
      };
      show: {
        required: boolean;
        tsType: {
          name: string;
        };
        description: string;
      };
      options: {
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
      handleSelect: {
        required: boolean;
        tsType: {
          name: string;
          type: string;
          raw: string;
          signature: {
            arguments: {
              type: {
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
              };
              name: string;
            }[];
            return: {
              name: string;
            };
          };
        };
        description: string;
      };
      isSelected: {
        required: boolean;
        tsType: {
          name: string;
          type: string;
          raw: string;
          signature: {
            arguments: {
              type: {
                name: string;
              };
              name: string;
            }[];
            return: {
              name: string;
            };
          };
        };
        description: string;
      };
      dropdownClassName: {
        required: boolean;
        tsType: {
          name: string;
        };
        description: string;
      };
      DropdownOptionComponent: {
        required: boolean;
        tsType: {
          name: string;
          type: string;
          raw: string;
          signature: {
            arguments: {
              type: {
                name: string;
                type: string;
                raw: string;
                signature: {
                  properties: (
                    | {
                        key: string;
                        value: {
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
                            arguments?: undefined;
                            return?: undefined;
                          };
                          required: boolean;
                        };
                      }
                    | {
                        key: string;
                        value: {
                          name: string;
                          required: boolean;
                          type?: undefined;
                          raw?: undefined;
                          signature?: undefined;
                        };
                      }
                    | {
                        key: string;
                        value: {
                          name: string;
                          type: string;
                          raw: string;
                          signature: {
                            arguments: {
                              type: {
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
                                required: boolean;
                              };
                              name: string;
                            }[];
                            return: {
                              name: string;
                            };
                            properties?: undefined;
                          };
                          required: boolean;
                        };
                      }
                  )[];
                };
              };
              name: string;
            }[];
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
//# sourceMappingURL=DropdownOptions.d.ts.map
