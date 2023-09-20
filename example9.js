//  return a new array that has filtered out all those who don't belong to the club.


function peopleWhoBelongToTheIlluminati(arr) {
  return arr.filter(person => {
    return person.member === true;
    //below this makes it so i just get the name of the MEMBERS 
  }).map(person => {
    return person.name;
  })
}


console.log(peopleWhoBelongToTheIlluminati([
  { name: "Angelina Jolie", member: true },
  { name: "Eric Jones", member: false },
  { name: "Paris Hilton", member: true },
  { name: "Kayne West", member: false },
  { name: "Bob Ziroll", member: true }
]));