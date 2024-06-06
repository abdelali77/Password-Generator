#!/usr/bin/env node
import { program } from 'commander';
import chalk from 'chalk';
import clipboard from 'clipboardy';
import createPassword from './utils/createPassword.js';
import savePassword from './utils/savePassword.js';

program.version('1.0.0').description('Password Generator');

program
	.option('-l, --length <number>', 'length of password', '8')
	.option('-s, --save', 'save password as password.txt')
	.option('-nn, --no-numbers', 'remove numbers from password')
	.option('-ns, --no-symbols', 'remove symbols from password')
	.option('-nl, --no-letters', 'remove letters from password')
  .parse();

const { length, save, numbers, symbols, letters } = program.opts();

const generatedPassword = createPassword(length, numbers, symbols, letters)

// save to file
if (save) savePassword(generatedPassword);

// copy to clipboard
clipboard.writeSync(generatedPassword);

// log
console.log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword));
console.log(chalk.yellow('Password copied to clipboard'));