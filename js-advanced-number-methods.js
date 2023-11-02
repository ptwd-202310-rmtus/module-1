let num1 = 3.2;
let num2 = 5.7;

console.log(Math.floor(num1)); // 3
console.log(Math.floor(num2)); // 5

console.log(Math.round(num1)); // 3
console.log(Math.round(num2)); // 6

console.log(Math.ceil(num1)); // 4
console.log(Math.ceil(num2)); // 6

// Math.floor(Math.random() * numbers.length);
// Math.round(Math.random() * numbers.length - 1);

// .toFixed() -> is used to round number of decimals to whatever we need
// HOWEVER it will change the type of variable from number to a string

let num = 3.1345678987866;
let roundedNum = num.toFixed(2);
console.log(typeof roundedNum); // string

let result = roundedNum * 4;
console.log(result); // this should be a NaN???

// convert string to a number

let convertedNum1 = Number(roundedNum);
console.log(typeof convertedNum1); // number

let convertedNum2 = +roundedNum
console.log(typeof convertedNum2); // number

let convertedNum3 = parseInt(roundedNum)
console.log(typeof convertedNum3); // number