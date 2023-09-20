function doubleNumbers(arr){
  return arr.map(num =>{
    // allows you to take the element and mutiply by 2
    return num * 2;
  })
}

console.log(doubleNumbers([2, 5, 100]));