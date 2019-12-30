console.log('starting app');
setTimeout(()=>{
console.log('waiting for 2 second');

},200);
setTimeout(()=>{
  console.log('waiting for zero second');
},0);

console.log('end the program');

//run node asyncexampltest.js
//starting app
//end the program
//waiting for zero second
//waiting for 2 second
