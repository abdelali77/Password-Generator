const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';

const createPassword = (length = 6, hasNumbers = true, hasSymbols = true, hasLetters = true) => {
    let characters = '';
    hasNumbers ? (characters += numbers) : ''
    hasSymbols ? (characters += symbols) : ''
    hasLetters ? (characters += alpha) : ''

    return generatePassword(length, characters);
}

function generatePassword(length, characters) {
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    return password;
}

export default createPassword;