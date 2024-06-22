// Defines the structure for options used when generating a password.
type PasswordOptions = {
    length: number;         // Desired length of the password
    incNumbers: boolean;    // Whether to include numbers in the password
    incSymbols: boolean;    // Whether to include special symbols in the password
};

/**
 * Generates a random password based on the provided options.
 * 
 * @param options Configuration object containing the settings for password generation,
 * including length, and whether to include numbers and symbols.
 * @returns A randomly generated password as a string.
 */
function generatePassword(options: PasswordOptions): string {
    // Define character sets for password components
    const letters = "abcdefghijklmnopqrstuvwxyz"; // Lowercase letters
    const numbers = "0123456789";                 // Digits
    const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>/?"; // Special characters

    // Start with all lowercase and uppercase letters as valid characters
    let validChars = letters + letters.toUpperCase();

    // Append numbers to the list of valid characters if required
    if (options.incNumbers) validChars += numbers;

    // Append symbols to the list of valid characters if required
    if (options.incSymbols) validChars += symbols;

    // Generate a random password by selecting characters randomly from the validChars string
    // based on the specified length
    return Array.from({ length: options.length }, () => validChars[Math.floor(Math.random() * validChars.length)]).join('');
}

// Export the generatePassword function and the PasswordOptions type for use in other modules
export { generatePassword, PasswordOptions };
