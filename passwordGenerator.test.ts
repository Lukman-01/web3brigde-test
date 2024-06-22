import { generatePassword, PasswordOptions } from './passwordGenerator';

// Describe block groups together several related tests for the password generator functionality
describe('Password Generator', () => {
    
    // Test to ensure that the password generated matches the specified length
    test('should create a password of correct length', () => {
        const length = 10;
        const password = generatePassword({ length, incNumbers: true, incSymbols: true });
        expect(password.length).toBe(length);
    });

    // Test to check if the generated password includes numbers when requested
    test('should contain numbers if requested', () => {
        const options: PasswordOptions = { length: 15, incNumbers: true, incSymbols: false };
        const password = generatePassword(options);
        expect(password).toMatch(/[0-9]/);  // Uses regex to check for numeric characters
    });

    // Test to verify that the generated password contains special characters when requested
    test('should contain symbols if requested', () => {
        const options: PasswordOptions = { length: 15, incNumbers: false, incSymbols: true };
        const password = generatePassword(options);
        expect(password).toMatch(/[!@#$%^&*()_+\-=[\]{}|;:',.<>/?]/);  // Uses regex to check for special characters
    });

    // Test to confirm that the password consists only of letters when numbers and symbols are not requested
    test('should only contain letters if no numbers or symbols are requested', () => {
        const options: PasswordOptions = { length: 15, incNumbers: false, incSymbols: false };
        const password = generatePassword(options);
        expect(password).toMatch(/^[A-Za-z]+$/);  // Regex checks that the password contains only letters
    });

    // Tests to verify that the password length varies as requested
    test('varying lengths', () => {
        expect(generatePassword({ length: 5, incNumbers: true, incSymbols: true }).length).toBe(5);
        expect(generatePassword({ length: 20, incNumbers: true, incSymbols: true }).length).toBe(20);
    });

    // Test to ensure that generating a password of zero length returns an empty string
    test('empty password on zero length', () => {
        expect(generatePassword({ length: 0, incNumbers: true, incSymbols: true })).toBe('');
    });
});
