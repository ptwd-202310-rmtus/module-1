// ------- NUMBERS -------

const age = 35; // integer
const price = 12.99; // floating-point number

let result = 5 / 0;
console.log(result); // infinity

console.log(name / 2); // NaN

// Basic math operations:

// + addition
// - subtraction
// * multiplication
// / division
// ** exponentiation
// % modulo (is the remainder operator. Think of this as saying If I divide the first number by the second, what is the remainder?)

// exponentiation
console.log(2 ** 5) // 2 * 2 * 2 * 2 * 2 = 32

// modulo
console.log(22 % 3) // 1
console.log( 26 % 4 === 3); // false

// ------- STRINGS -------

// 3 ways to create strings:
// double (""), single quotes ('') and backticks (``)

const name = "Ana";
console.log(`my name is ${name}`); // my name is Ana
console.log(`${name} has ${22+11} years`); // Ana has 33 years

const statement = "this is our test string";

console.log(statement[0]);  // t

statement[0] = "T";
console.log(statement); //  the 1st letter is still lowercased - this is our test string

let num = 3;
console.log(typeof num); // number

num += 11; // num = num + 11

console.log(num); // 14

num = "3";
console.log(typeof num); // string

num += 11; // num = num + 11
console.log("----> ", num); // 311 --> concatination

console.log(statement.length); // 23

// ----- string methods ----

// check if a string includes another string

// includes() --> returns true or false
// indexOf() --> returns the position where the substring is found or returns -1 (false) if it is not found

console.log(statement.includes("stri")); // true
console.log(statement.indexOf("stri")); // 17
console.log(statement.indexOf("stri ")); // -1 (false)

// access a specific character in a string
console.log(statement.charAt(0)); // t

// substring (start, end]
// slice (start, end] --> we can put just 1 and negative number

console.log(statement.substring(5, 10)); // is ou
console.log(statement.slice(5, 10)); // is ou
console.log(statement.slice(-4)); // ring

// startsWith() & endsWith() --> returns true or false

console.log(statement.startsWith("this")); // true
console.log(statement.endsWith("str")); // false
