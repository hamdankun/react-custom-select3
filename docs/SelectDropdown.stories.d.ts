import type { StoryObj } from '@storybook/react';
import { SelectDropdownProps } from '.';
/**
 * Meta configuration for the SelectDropdown component story.
 */
declare const meta: {
  /**
   * Title of the story in the Storybook UI.
   */
  title: string;
  /**
   * The component to be documented.
   */
  component: {
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
  /**
   * Additional parameters for the story.
   */
  parameters: {};
  /**
   * Tags for categorizing the story.
   */
  tags: string[];
  /**
   * Configuration for the controls in the Storybook UI.
   */
  argTypes: {
    /**
     * Control for the `id` prop of the component.
     */
    id: {
      control: 'text';
    };
    /**
     * Control for the `multiple` prop of the component.
     */
    multiple: {
      control: 'boolean';
    };
    /**
     * Control for the `outlined` prop of the component.
     */
    outlined: {
      control: 'boolean';
    };
    /**
     * Control for the `options` prop of the component.
     */
    options: {
      control: 'object';
    };
    /**
     * Action handler for the `onChange` event of the component.
     */
    onChange: {
      action: string;
    };
  };
  /**
   * Default arguments for the story.
   */
  args: {
    /**
     * Default handler for the `onChange` event.
     */
    onChange: import('@vitest/spy').Mock<(...args: any[]) => any>;
  };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=SelectDropdown.stories.d.ts.map
