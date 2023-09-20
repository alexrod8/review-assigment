function evensOnly(arr) {
 return arr.filter(Number => {
  return Number % 2 === 0;
 })
}
// test
console.log(evensOnly([3, 6, 8, 2]));