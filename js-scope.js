// global scope
// function scope
// block scope

// for (){}

// if(){}


// function someName(){}

// "use strict"

var x = 10;

function printNums(){
  var y = 5;

  console.log(x); // 10
  console.log(y); // 5
}

// printNums();
// console.log("y outside of the function: ", y)

// let x = 10;

function printNums1(){
  const y = 5;

    // y = 22; // -->  Assignment to constant variable.
  if (true){
    let z = 3;
    console.log(x); // 10
    console.log(y); // 5
    console.log(z); // 3
  }    

  // console.log(z); // ReferenceError: z is not defined
}

printNums1();

const myObj = {
  name: "sandra",
  age: 38
}

myObj.age = 45

console.log(myObj)

// myObj = {
//   name: "marcelo",
//   age: 28
// } // Assignment to constant variable.


// for (var i = 0; i < 5; i++){
//   console.log(i)
// }

// console.log("outside of the for loop:", i); // works


for (let i = 0; i < 5; i++){
  console.log(i)
}

console.log("outside of the for loop:", i); // throws an error