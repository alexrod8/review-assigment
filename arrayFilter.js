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
// filter out people under the age of 30 
// the parameter can be anyname u want 
const overThirty = people.filter(person => {
return person.age > 30;
});

console.log(overThirty);

