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

const totalAge = people.reduce((total , person ) => {
 return total + person.age;
}, 0); // setting an intital value so the total starts at 0
console.log(totalAge);

