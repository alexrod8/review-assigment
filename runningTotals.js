// a function that takes a array of numbers
// returns an array with the same number of elements 
// but each elements vaule being the running total from the original array 

  const runningTotal = (array) => {
    let counter = 0;
  return array.map(element => counter += element);
  }


console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []