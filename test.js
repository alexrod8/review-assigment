let test = "I'm global"; 
 
function testScope() { 
  let test = "I'm local"; 
 
  console.log (test);      
} 
 
testScope();           // output: I'm local 
console.log(test);
