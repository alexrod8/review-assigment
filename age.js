const readline = require('readline-sync');
const userAge = readline.question('How old are you? ')

console.log(`You are ${userAge} years old right now.`)
console.log(`In 10 years, you will be ${Number(userAge) + 10} years old.`)
console.log(`In 20 years, you will be ${Number(userAge) + 20} years old.`)
console.log(`In 30 years, you will be ${Number(userAge) + 30} years old.`)
