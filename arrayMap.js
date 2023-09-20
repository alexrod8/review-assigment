// Map method used a arrow function on line 21

const people = [
  {
  name: 'Dom',
  age: 35,
  occupation: 'Web developer'
  },
  {
  name: 'Amy',
  age: 26,
  occupation: 'nurse'
  },
  {
    name: 'bruce',
    age: 55,
    occupation: 'Electrician'
  }
];

const names = people.map(person => {
  return person.name;
})


console.log(names);




