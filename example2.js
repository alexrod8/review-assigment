

let g = ['a', 'b', 'c']  // First the variable g is intiallized to an array
let h = g  // then its reassgined to the variable h



g[1] = 'x' // then we go back to the variable g and get the index of 1 and ressagined 'b' with x 


console.log(g);   //since we have the index of 1 it outputs ['a', 'x', 'c'] 


console.log(h);
 // it outputs ['a', 'x', 'c'] since its a pass by refrence 
 // and were only reassingng a index instead of a whole array the varible H is also mutatued
