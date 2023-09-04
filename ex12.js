
// the first line 'readline-sync' package provides a function that allows to read import from the user in the command line 
const readline = require('readline-sync');
// this second line intailze a variable billAmount and prompts the user to enter the bill amount using the readline.question()
// the entered vaule is stored in the variable billAmount 
let billAmount = readline.question('What is the bill? ');
// this third line intializes the tipPercent and prompt the user to enter his tip percentage 
// the entered vaule is stored in the variable tipPercent 
let tipPercent = readline.question('What is the tip percentage? ');
// we then intianlize the tipAmount which calculates first the tip percent divide by 100 then mutliplied by the bill amount 
// the result is then stored in the tipAmount
let tipAmount = billAmount * (tipPercent / 100);

// we then intialize the totalBill which converts the variables billAmount and tipAmount into numbers and adds the two variables together 
// the result is stored in the totalBill 
let totalBill = Number(billAmount) + Number(tipAmount);
// finally we console.log(tipAmount)
// finally we console.log(totalbill)
console.log('the tip is $' + tipAmount);

console.log('the total is $' + totalBill);