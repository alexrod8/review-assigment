// allows to make numbers into strings


function stringItUp(arr){
  return arr.map(num => {
  return num + '';
  })
}

console.log(stringItUp([2, 5, 100]));