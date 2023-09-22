// a function that takes a array of numbers
// returns an array with the same number of elements 
// but each elements vaule being the running total from the original array 

// Rule: returns an array with the same number of elements 
// Rule: but with each element's value being the running total from the original array.



  const runningTotal = (array) => {
    let sum = 0;
    return array.map(value => sum += value);
    
  }


console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]))                  // [3]
console.log(runningTotal([]));                   // []