import fs from 'fs';
import path from 'path';
import { dirname } from "path";
import os from 'os';
import chalk from 'chalk';
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const savePassword = (pass) => {
	fs.open(path.join(__dirname, '../', 'passwords.txt'), 'a', 666, (e, id) => {
		fs.write(id, pass + os.EOL, null, 'utf-8', () => {
			fs.close(id, () => {
				console.log(chalk.blue('Password saved to passwords.txt'));
			});
		});
	});
};

export default savePassword;