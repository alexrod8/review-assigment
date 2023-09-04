const readline = require('readline-sync');


let lengthOfRoom = readline.question('Enter the length of the room in meters: ');

while(isNaN(lengthOfRoom)) {
  console.log('Invaild Answer Has to be a NUMBER!');
  lengthOfRoom = readline.question('Enter the length of the room in meters: ');
}

let widthOfRoom = readline.question('Enter the width of the room in meters: ');

while(isNaN(widthOfRoom)){
  console.log('Invaild Answer Has to be a NUMBER!');
  widthOfRoom = readline.question('Enter the width of the room in meters: ');
}


let inSquareFeet  = Number(lengthOfRoom) * Number(widthOfRoom) * 10.7639;

let areaOfRoom = Number(lengthOfRoom) * Number(widthOfRoom);


console.log('The area of the room is ' + areaOfRoom + ' square meters (' + inSquareFeet.toFixed(2) + ' square feet).')





