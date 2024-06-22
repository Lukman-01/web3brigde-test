# Random Password Generator

This TypeScript-based project provides a utility to generate random passwords with configurable options for length, inclusion of numbers, and inclusion of special symbols. The purpose of this project is to offer a secure and customizable way to create passwords for various uses, ensuring compliance with common security standards.

## Features

- **Customizable Length**: Specify the exact length of the password.
- **Include Numbers**: Option to include numeric characters in the password.
- **Include Symbols**: Option to include special characters in the password.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine. You can download and install them from [Node.js official website](https://nodejs.org/).

### Installing

Clone the repository to your local machine:

```bash
git clone https://github.com/Lukman-01/web3brigde-test.git
cd web3brigde-test
```

Install the required dependencies:

```bash
npm install
```

### Usage

To generate a password, use the `generatePassword` function from the `passwordGenerator.ts` file. Here is a simple example of how to use it:

```typescript
import { generatePassword } from './passwordGenerator';

const options = {
    length: 12,
    incNumbers: true,
    incSymbols: true
};

const password = generatePassword(options);
console.log(`Generated Password: ${password}`);
```
## Testing Explanation

This project utilizes Jest to run a suite of automated tests to ensure the password generator functions as expected under various configurations. The tests are designed to validate several key aspects of the password generation process:

- **Password Length**: Tests that the password generated matches the requested length.
- **Inclusion of Numbers**: Verifies that the generated password includes numbers when the option is set to true.
- **Inclusion of Symbols**: Checks that the password contains symbols if enabled.
- **Character Exclusivity**: Ensures the password contains only the specified types of characters (e.g., no numbers or symbols when these options are set to false).
- **Zero Length Password**: Confirms that the function returns an empty string when a zero length is requested.

### How to Run Tests

To execute the tests, follow these steps in your terminal after you have installed the project dependencies:

```bash
npm test
```

This will invoke the Jest testing framework to run the test cases specified in `passwordGenerator.test.ts`. The results will show whether each test has passed or failed, allowing you to verify the functionality of the password generator script.