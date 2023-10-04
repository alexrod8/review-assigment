const readline = require('readline-sync');

const firstNumber = readline.question('enter the first number: '.toUpperCase());
const secondNumber = readline.question('enter the second number: '.toUpperCase());
const result = Number(firstNumber) * Number(secondNumber);
console.log(`${firstNumber} * ${secondNumber} = ${result}`);



