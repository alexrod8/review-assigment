function stack2(param) {
   param = 'eduardo';
  console.log( 'stack2: ',param);
}

function stack1(param) {
  console.log('stack1: ',param);
  stack2(param)
}
function entryPoint(param) {
  console.log('entryPoint: ', param);
  stack1(param)
}

let param = 'DEIVID';

entryPoint(param);
console.log('Main: ', param);
