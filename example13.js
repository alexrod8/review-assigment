function capitalizeNames(arr){
 return arr.map(person =>{
  return person.toUpperCase();
 })
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));