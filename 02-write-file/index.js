const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdout, stdin } = process;

const pathToFile = path.join(__dirname, 'text.txt');
const readLine = readline.createInterface(stdin);
const stream = fs.createWriteStream(pathToFile, { flags: 'a' });

stdout.write('Type any text\nText exit to exit\n');

readLine.on('line', (input) => {
  if (input.trim() === 'exit') {
    stdout.write('Your text is saved! Bye-bye!');
    process.exit();
  }
  stream.write(`${input}\n`);
});

readLine.on('SIGINT', () => {
  stdout.write('Bye-bye!');
  process.exit();
});
