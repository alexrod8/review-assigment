
function scopeTestParamNameDifferent(myNameParam) {
  
  console.log("scopeTestParamNameDifferent - myNameParam: " + myNameParam);
  console.log("scopeTestParamNameDifferent - myName (global): " + myName);
  
  console.log("changing the values of myNameParam and myName")
  myNameParam = "Cade"
  myName = "Alexis"
  
  console.log("scopeTestParamNameDifferent - myNameParam: " + myNameParam);
  console.log("scopeTestParamNameDifferent - myName (global): " + myName);

  console.log();

}

function scopeTestParamNameSame(myName) {

  console.log("the questionis... myName is local or global? I believe local")
  console.log("If we chagne it, and main still prints the original value then it is local");
  console.log("scopeTestParamNameSame - myName: " + myName);

  console.log("changing the values of myName")
  myName = "Alexis"

  console.log("scopeTestParamNameSame - myName: " + myName);
  console.log()

}

let myName = "xxx";

console.log()
console.log("main - name before: " + myName)
console.log()

scopeTestParamNameDifferent(myName)

console.log("main - name after scopeTestParamNameDifferent: " + myName)
console.log()

console.log("reset the value to xxx)")
myName = "xxx";

scopeTestParamNameSame(myName)

console.log("main - name after: " + myName)

