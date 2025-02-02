import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { SelectDropdown } from '.';
import { SelectDropdownProps } from './types';

/**
 * Meta configuration for the SelectDropdown component story.
 */
const meta = {
  /**
   * Title of the story in the Storybook UI.
   */
  title: 'Form/Select Dropdown Field',

  /**
   * The component to be documented.
   */
  component: SelectDropdown,

  /**
   * Additional parameters for the story.
   */
  parameters: {},

  /**
   * Tags for categorizing the story.
   */
  tags: ['autodocs'],

  /**
   * Configuration for the controls in the Storybook UI.
   */
  argTypes: {
    /**
     * Control for the `id` prop of the component.
     */
    id: { control: 'text' },

    /**
     * Control for the `multiple` prop of the component.
     */
    multiple: { control: 'boolean' },

    /**
     * Control for the `outlined` prop of the component.
     */
    outlined: { control: 'boolean' },

    /**
     * Control for the `options` prop of the component.
     */
    options: { control: 'object' },

    /**
     * Action handler for the `onChange` event of the component.
     */
    onChange: { action: 'onChange' },
  },

  /**
   * Default arguments for the story.
   */
  args: {
    /**
     * Default handler for the `onChange` event.
     */
    onChange: fn(),
  },
} satisfies Meta<SelectDropdownProps<any>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    optionLabel: 'Label',
    options: [
      {
        label: 'Option 1',
        value: 'Option 1',
      },
      {
        label: 'Option With Icon 2',
        value: 'Option With Icon 2',
      },
      {
        label: 'Long Long Option 3',
        value: 'Long Long Option 3',
      },
      {
        label: 'Long Long Long Option 4',
        value: 'Long Long Long Option 4',
      },
      {
        label: 'Long Long Long Long Option 5',
        value: 'Long Long Long Long Option 5',
      },
      {
        label: 'Long Long Long Long Long Option 6',
        value: 'Long Long Long Long Long Option 6',
      },
    ],
    multiple: true,
    outlined: false,
    withSearch: true,
    placeholder: 'Select an option',
  },
};
