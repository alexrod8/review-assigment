function ofAge(arr){
  return arr.filter(person =>{
    return person.age >= 18;
  })
}
// test
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 18 },
    { name: "Bob Ziroll", age: 100 }
])); 