const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';

const createPassword = (length = 8, hasNumbers = true, hasSymbols = true, hasLetters = true, hasUpper = false, hasLower = false) => {
	let characters = ''
	if (hasLetters) {
		if (hasUpper && !hasLower) {
			characters += upperCase;
		} else if (hasLower && !hasUpper) {
			characters += lowerCase;
		} else {
			characters += alpha;
		}
	}
	
	if (hasNumbers) {
		characters += numbers;
	}
	
	if (hasSymbols) {
		characters += symbols;
	}
	
	if (characters.length === 0) {
		characters = alpha;
	}

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