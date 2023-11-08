// func statements/declarations - get hoisted (which means get pulled up on top of the whole code once the code gets transpiled into machine code)

console.log(printInfo("milk", 7.99));
function printInfo(product, price){
  return `${product} price is ${price}.`;
}

// console.log(printInfo("milk", 5.99))

// func expression -> doesn't get hoisted and can be used only after it is initialized
const sandwichInfo = printInfo("sandwich", 7.49); // 

// console.log(addition(3, 14)); // ReferenceError: Cannot access 'addition' before initialization
const addition = function(x, y){
  return x + y;
}

console.log(addition(3, 4));

console.log("------------------------------------");

// callback

// 1

function study(subject){
  console.log(`I am studying ${subject}`)
}

// 2
function enjoy(){
  console.log(`I am done with studying and now I am enjoying`)
}

// study("JavaScript");
// enjoy();

// I am studying JavaScript
// I am done with studying and now I am enjoying

function study1(subject){
  setTimeout(() => {
    console.log(`I am studying ${subject}`);
  }, 1000);
}

// study1("JavaScript");
// enjoy();


function study2(subject, callback){
  console.log(`I am studying ${subject}`);
  callback()
}

study2("HTML", enjoy); // no paretheses when I execute the callback function


function test1(what){
  console.log(`I am from the function 1: ${what}`);
}

function test2(arg, callback){
  callback(arg);
}

test2("doing nothing", test1);

// study2("math", () => console.log(`After studying I am enjoying`))

console.log("------------------------------------");

const students = ["alberto", "marcelo"];

// students.forEach(function(student) {
//   console.log(student.toUpperCase())
// })

function uppercaseStudensNames(student){
  console.log(student.toUpperCase())
}

students.forEach(uppercaseStudensNames)

// arrow function

function multiply(x, y){
  return x * y
}

// const multiply1 = (a, b) => {
//   return a * b
// }

const multiply1 = (a, b) => `hello: ${a}, ${b}`; // explicit return - when we don't have to use the "return" statement as everything gets returned in just a single line


console.log(multiply1(3, 6));

