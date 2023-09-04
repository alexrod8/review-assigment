// First we are intzalizing a function called isOdd and assgining a paramater num
// then inside the function isOdd we would use an if conditon to check if a number is even or odd
// if the result of num % 2 is a odd number or any number at all return true since its a truthy if the number is even return falsly because it has no number
const isOdd = (num) => {
if(num % 2){
  return true ;
} else 
return false
}


console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

