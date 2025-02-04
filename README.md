# React Custom Select3

A custom select component for React.

## Description

React Custom Select3 is a highly customizable and easy-to-use select component for React applications. It provides a flexible and user-friendly interface for selecting options from a dropdown list.

## Installation

To install the package, run:

```bash
npm install react-custom-select3
```

or with yarn:

```bash
yarn add react-custom-select3
```

## Usage

Here is a basic example of how to use the React Custom Select3 component:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { SelectDropdown } from 'react-custom-select3';
import 'react-custom-select3/dist/react-custom-select3.css';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

function App() {
  return (
    <div>
      <h1>React Custom Select3 Example</h1>
      <SelectDropdown optionLabel="Select" multiple options={options} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

## Running the Project

To run the project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/hamdankun/react-custom-select3.git
```

2. Navigate to the project directory:

```bash
cd react-custom-select3
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run storybook
```

5. Open your browser and go to `http://localhost:6006` to see the project running.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature requests.

## License

This project is licensed under the MIT License.
