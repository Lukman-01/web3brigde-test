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

### Running the Tests

To run the tests, execute:

```bash
npm test
```

This command will run the test suite defined in `passwordGenerator.test.ts`, ensuring that the password generation meets all specified criteria.

 