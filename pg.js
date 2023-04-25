const program = require ('commander');
const createPassword = require('./utils/createPassword');
const log = console.log;

program.version('1.0.0').description('Password Generator');

program
  .option('-l, --length <number>', 'length of password', '6')
  .option('-s, --save', 'save password as password.txt')
	.option('-nn, --no-numbers', 'remove numbers from password')
	.option('-ns, --no-symbols', 'remove symbols from password')
	.option('-nl, --no-letters', 'remove letters from password')
  .parse();

const { length, save, numbers, symbols, letters } = program.opts();

const generatedPassword = createPassword(length, numbers, symbols, letters)

// log
log(generatedPassword);