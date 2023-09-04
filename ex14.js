//Write a program that asks the user to enter an integer greater than 0, 
//then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.


const readline = require('readline-sync');

let integer = readline.question('Please enter an integer greater then 0: ')

let userAnswer = readline.question('Enter s to compute the sum, or p to compute the product: ')
if (userAnswer === 's') {
  let sum = 0;
  for (let i = 1; i <= integer; i++) {
    sum += i;
  }
  console.log('The sum of numbers from 1 to ' + integer + ' is: ' + sum);
} else if (userAnswer === 'p') {
  let product = 1;
  for (let j = 1; j <= integer; j++) {
    product *= j;
  }
  console.log('The product of numbers from 1 to ' + integer + ' is: ' + product);
}

