const readline = require('readline-sync')
function question(prompt) {
  return readline.question(prompt);

}

function multiply1(left, right) {
  let product = left * right;
  return product;
}

function multiply2(x, y) {
  console.log('Left: ', left);
  left = 20;
  console.log('Left: ', left);
  let product = x * y;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}
function startingPoint() {
  let left = getNumber('Enter the first number: ');
  let right = getNumber('Enter the second number: ');
  console.log(`${left} * ${right} = ${multiply2(left, right)}`);
  console.log('Left: ', left);
}

startingPoint();
