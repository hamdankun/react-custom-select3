import { expect, it, describe, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { SelectDropdown } from '.';
import { fireEvent } from '@testing-library/dom';

// Mock ResizeObserver
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserver;

describe('SelectDropdown Component Test', () => {
  it('should render SelectDropdown component', () => {
    const { container } = render(
      <SelectDropdown
        multiple
        optionLabel="Label"
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render SelectDropdown with css id', () => {
    const { container } = render(
      <SelectDropdown
        multiple
        id="select-dropdown"
        optionLabel="Label"
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
      />,
    );

    expect(container.querySelector('#select-dropdown')).toBeTruthy();
  });

  it('should render SelectDropdown with multiple support', () => {
    const { container } = render(
      <SelectDropdown
        multiple
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
      />,
    );

    expect(container.querySelector('.select-multiple')).toBeTruthy();
  });

  it('should render SelectDropdown with Search support', async () => {
    const { findByPlaceholderText, getByPlaceholderText } = render(
      <SelectDropdown
        multiple
        withSearch
        defaultOpen
        optionLabel="Label"
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
      />,
    );

    expect(getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('should render SelectDropdown with outlined support', async () => {
    const { container } = render(
      <SelectDropdown
        multiple
        optionLabel="Label"
        outlined
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
      />,
    );

    expect(container.querySelector('.outlined-active')).toBeTruthy();
  });

  it('should render SelectDropdown with placeholder', async () => {
    const { getByText } = render(
      <SelectDropdown
        multiple
        optionLabel="Label"
        placeholder="Select an option"
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
      />,
    );

    expect(getByText('Select an option')).toBeInTheDocument();
  });

  it('should render SelectDropdown multiple false with defaultValue', async () => {
    const { getByText } = render(
      <SelectDropdown
        optionLabel="Label"
        multiple={false}
        placeholder="Select an option"
        defaultValue={{ label: 'Option 1', value: 'option1' }}
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
      />,
    );

    expect(getByText('Option 1')).toBeInTheDocument();
  });

  it('should render SelectDropdown multiple true with defaultValue', async () => {
    const { getByText } = render(
      <SelectDropdown
        optionLabel="Label"
        multiple
        placeholder="Select an option"
        defaultValue={[{ label: 'Option 1', value: 'option1' }]}
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
      />,
    );

    expect(getByText('Option 1')).toBeInTheDocument();
  });

  it('should render SelectDropdown multiple false with value', async () => {
    const { getByText } = render(
      <SelectDropdown
        optionLabel="Label"
        multiple={false}
        placeholder="Select an option"
        value={{ label: 'Option 1', value: 'option1' }}
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
      />,
    );

    expect(getByText('Option 1')).toBeInTheDocument();
  });

  it('should render SelectDropdown multiple true with value', async () => {
    const { getByText } = render(
      <SelectDropdown
        optionLabel="Label"
        multiple
        placeholder="Select an option"
        value={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option 2' },
        ]}
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
      />,
    );

    expect(getByText('Option 1')).toBeInTheDocument();
    expect(getByText('Option 2')).toBeInTheDocument();
  });

  it('should render SelectDropdown custom class', async () => {
    const { container } = render(
      <SelectDropdown
        multiple
        optionLabel="Label"
        containerClassName="container-custom-class"
        labelClassName="label-custom-class"
        dropdownClassName="dropdown-custom-class"
        defaultOpen
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
      />,
    );

    expect(container.querySelector('.container-custom-class')).toBeTruthy();
    expect(container.querySelector('.label-custom-class')).toBeTruthy();
    expect(container.querySelector('.dropdown-custom-class')).toBeTruthy();
  });

  it('should call onChange when an option is selected', async () => {
    const handleChange = vi.fn();
    render(
      <SelectDropdown
        multiple
        optionLabel="Label"
        defaultOpen
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
        onChange={handleChange}
      />,
    );

    fireEvent.click(screen.getByText('Option 1'));
    fireEvent.click(screen.getByText('Option 2'));

    expect(handleChange).toHaveBeenCalledTimes(2);
  });

  it('should render SelectDropdown with custom component', async () => {
    const { findAllByTestId, getByTestId } = render(
      <SelectDropdown
        multiple
        optionLabel="Label"
        defaultOpen
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
        components={{
          DropdownLabel: ({ optionLabel }) => (
            <div data-testid="custom-option-label-component">{optionLabel}</div>
          ),
          DropdownSelectedItem: ({ value }) => (
            <div data-testid="custom-option-selected-item-component">
              Custom
            </div>
          ),
          DropdownOption: ({ option }) => (
            <div data-testid="custom-dropdown-option-component">
              custom option {option.label}
            </div>
          ),
        }}
      />,
    );

    expect(getByTestId('custom-option-label-component')).toBeInTheDocument();
    expect(
      getByTestId('custom-option-selected-item-component'),
    ).toBeInTheDocument();

    const options = await findAllByTestId('custom-dropdown-option-component');

    expect(options[0]).toBeInTheDocument();
  });

  it('should render SelectDropdown with custom component', async () => {
    const { findAllByTestId, getByTestId } = render(
      <SelectDropdown
        multiple
        optionLabel="Label"
        defaultOpen
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
        components={{
          Dropdown: ({ options }) => (
            <div data-testid="custom-dropdown-component">custom dropdown</div>
          ),
        }}
      />,
    );

    expect(getByTestId('custom-dropdown-component')).toBeInTheDocument();
  });
});
