import { generatePassword, PasswordOptions } from './passwordGenerator';

describe('Password Generator', () => {
    test('should create a password of correct length', () => {
        const length = 10;
        const password = generatePassword({ length, incNumbers: true, incSymbols: true });
        expect(password.length).toBe(length);
    });

    test('should contain numbers if requested', () => {
        const options: PasswordOptions = { length: 15, incNumbers: true, incSymbols: false };
        const password = generatePassword(options);
        expect(password).toMatch(/[0-9]/);
    });

    test('should contain symbols if requested', () => {
        const options: PasswordOptions = { length: 15, incNumbers: false, incSymbols: true };
        const password = generatePassword(options);
        expect(password).toMatch(/[!@#$%^&*()_+\-=[\]{}|;:',.<>/?]/);
    });

    test('should only contain letters if no numbers or symbols are requested', () => {
        const options: PasswordOptions = { length: 15, incNumbers: false, incSymbols: false };
        const password = generatePassword(options);
        expect(password).toMatch(/^[A-Za-z]+$/);
    });

    test('varying lengths', () => {
        expect(generatePassword({ length: 5, incNumbers: true, incSymbols: true }).length).toBe(5);
        expect(generatePassword({ length: 20, incNumbers: true, incSymbols: true }).length).toBe(20);
    });

    test('empty password on zero length', () => {
        expect(generatePassword({ length: 0, incNumbers: true, incSymbols: true })).toBe('');
    });
});
