const readline = require('readline-sync');

const firstName = readline.question('What is your first name? ')
const lastName = readline.question('What is your last name? ')

const fullName = firstName + ' ' + lastName;

console.log( 'Hello, ' + fullName.toUpperCase());