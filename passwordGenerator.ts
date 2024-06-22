type PasswordOptions = {
    length: number;
    incNumbers: boolean;
    incSymbols: boolean;
};

function generatePassword(options: PasswordOptions): string {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>/?";

    let validChars = letters + letters.toUpperCase();
    if (options.incNumbers) validChars += numbers;
    if (options.incSymbols) validChars += symbols;

    return Array.from({ length: options.length }, () => validChars[Math.floor(Math.random() * validChars.length)]).join('');
}

export { generatePassword, PasswordOptions };
