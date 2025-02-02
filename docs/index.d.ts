import { DropdownOptionProps, SelectValue } from './types';
type InnerProps<T> = {
  innerProps: SelectDropdownProps<T>;
};
/**
 * Props for the SelectDropdown component.
 */
export type SelectDropdownProps<T> = {
  /**
   * The id of the component.
   */
  id?: string;
  /**
   * Whether the dropdown allows multiple selections.
   */
  multiple?: boolean;
  /**
   * Whether the dropdown is open by default.
   */
  defaultOpen?: boolean;
  /**
   * Whether the dropdown has a search input.
   */
  withSearch?: boolean;
  /**
   * The options to display in the dropdown.
   */
  options: Array<SelectValue<T>>;
  /**
   * The label for the dropdown.
   */
  optionLabel?: string;
  /**
   * Whether the dropdown is outlined.
   */
  outlined?: boolean;
  /**
   * event handler for the `onChange` event of the component.
   * @param value
   * @returns
   */
  onChange?: (value: Array<SelectValue<T>> | SelectValue<T>) => void;
  /**
   * The placeholder for the dropdown.
   */
  placeholder?: string;
  /**
   * The default value of the dropdown.
   */
  defaultValue?: Array<SelectValue<T>> | SelectValue<T> | null;
  /**
   *  The value of the dropdown.
   */
  value?: Array<SelectValue<T>> | SelectValue<T> | null;
  /**
   * The class name for the container of the component.
   */
  containerClassName?: string;
  /**
   * The class name for the label of the component.
   */
  labelClassName?: string;
  /**
   * The class name for the dropdown of the component.
   */
  dropdownClassName?: string;
  /**
   * Custom components for the dropdown.
   */
  components?: Partial<{
    DropdownLabel: (props: InnerProps<T>) => JSX.Element;
    DropdownSelectedItem: (props: InnerProps<T>) => JSX.Element;
    Dropdown: (props: InnerProps<T>) => JSX.Element;
    DropdownOption: (props: DropdownOptionProps<T>) => JSX.Element;
  }>;
};
/**
 * A customizable dropdown select component that supports both single and multiple selection.
 *
 * @template T - The type of the value stored in the options
 * @param props - The component props
 * @param props.id - Optional unique identifier for the select dropdown
 * @param props.optionLabel - Optional label text to display above the dropdown
 * @param props.placeholder - Placeholder text when no option is selected
 * @param props.options - Array of options to display in the dropdown
 * @param props.multiple - Whether to allow multiple selections (defaults to true)
 * @param props.defaultOpen - Whether the dropdown is open by default
 * @param props.withSearch - Whether to include search functionality (defaults to true)
 * @param props.onChange - Callback fired when selection changes
 * @param props.containerClassName - Additional CSS classes for the container
 * @param props.labelClassName - Additional CSS classes for the label
 * @param props.dropdownClassName - Additional CSS classes for the dropdown menu
 * @param props.value - Controlled value of the select
 * @param props.defaultValue - Default value when uncontrolled
 * @param props.components - Custom components for the dropdown
 *
 * @returns A React component that renders a customizable select dropdown
 */
export declare const SelectDropdown: {
  <T>(
    props: SelectDropdownProps<T>,
  ): import('../../../node_modules/react/jsx-runtime').JSX.Element;
  __docgenInfo: {
    description: string;
    methods: never[];
    displayName: string;
    props: {
      id: {
        required: boolean;
        tsType: {
          name: string;
        };
        description: string;
      };
      multiple: {
        required: boolean;
        tsType: {
          name: string;
        };
        description: string;
      };
      defaultOpen: {
        required: boolean;
        tsType: {
          name: string;
        };
        description: string;
      };
      withSearch: {
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
      optionLabel: {
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
      onChange: {
        required: boolean;
        tsType: {
          name: string;
          type: string;
          raw: string;
          signature: {
            arguments: {
              type: {
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
                )[];
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
      placeholder: {
        required: boolean;
        tsType: {
          name: string;
        };
        description: string;
      };
      defaultValue: {
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
      containerClassName: {
        required: boolean;
        tsType: {
          name: string;
        };
        description: string;
      };
      labelClassName: {
        required: boolean;
        tsType: {
          name: string;
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
      components: {
        required: boolean;
        tsType: {
          name: string;
          elements: {
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
                                  type: string;
                                  raw: string;
                                  signature: {
                                    properties: (
                                      | {
                                          key: string;
                                          value: {
                                            name: string;
                                            required: boolean;
                                            type?: undefined;
                                            raw?: undefined;
                                            signature?: undefined;
                                            elements?: undefined;
                                          };
                                          description: string;
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
                                                          required: boolean;
                                                        }[];
                                                        raw: string;
                                                        type?: undefined;
                                                        signature?: undefined;
                                                        required?: undefined;
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
                                                        required: boolean;
                                                        elements?: undefined;
                                                      }
                                                  )[];
                                                };
                                                name: string;
                                              }[];
                                              return: {
                                                name: string;
                                              };
                                            };
                                            required: boolean;
                                            elements?: undefined;
                                          };
                                          description: string;
                                        }
                                      | {
                                          key: string;
                                          value: {
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
                                                    required: boolean;
                                                  }[];
                                                  raw: string;
                                                  type?: undefined;
                                                  signature?: undefined;
                                                  required?: undefined;
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
                                                  required: boolean;
                                                  elements?: undefined;
                                                }
                                              | {
                                                  name: string;
                                                  elements?: undefined;
                                                  raw?: undefined;
                                                  type?: undefined;
                                                  signature?: undefined;
                                                  required?: undefined;
                                                }
                                            )[];
                                            required: boolean;
                                            type?: undefined;
                                            signature?: undefined;
                                          };
                                          description: string;
                                        }
                                      | {
                                          key: string;
                                          value: {
                                            name: string;
                                            elements: {
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
                                                        required: boolean;
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
                                                        required: boolean;
                                                      };
                                                    }
                                                )[];
                                              };
                                            }[];
                                            raw: string;
                                            required: boolean;
                                            type?: undefined;
                                            signature?: undefined;
                                          };
                                          description: string;
                                        }
                                    )[];
                                  };
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
                      required: boolean;
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
                      required: boolean;
                    };
                  }
              )[];
            };
          }[];
          raw: string;
        };
        description: string;
      };
    };
  };
};
export {};
//# sourceMappingURL=index.d.ts.map
