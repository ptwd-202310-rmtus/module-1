let x = 10;
let y = 10;
let z = x;

console.log(z === y);

const person = {
  name: "john",
  age: 30
}

const person2 = {
  name: "john",
  age: 30
}

console.log("is the person and person2 the same object: ", person === person2); //   false


const personCopy = person;

console.log("is the person and personCopy the same object: ", person === personCopy); // true

person.name = "alberto";

console.log("person original: ", person);
console.log("person Copy: ", personCopy);

const arr1 = ["ana", "marcelo"];
const arr2 = ["ana", "marcelo"];

console.log("is the arr1 and arr2 the same array: ", arr1 === arr2); //  false

//  copy object - using .assign()

const book1 = {
  title: "pride and prejudice",
  author: "jane austen"
}

const book1copy = Object.assign({}, book1);

book1.title = "pride & prejudice";

console.log(book1.title); // pride & prejudice
console.log(book1copy.title); // pride and prejudice

const originalObj = {
  a: 1,
  b: [2, 3]
}

const copiedObj = Object.assign({}, originalObj);

console.log(copiedObj); // { a: 1, b: [ 2, 3 ] }

copiedObj.b.push(4);


console.log(originalObj); // { a: 1, b: [ 2, 3, 4 ] }
console.log(copiedObj); // { a: 1, b: [ 2, 3, 4 ] }

originalObj.a = 88;

console.log(originalObj.a); // 88
console.log(copiedObj.a); // 1


const originalObj2 = {
  a: 55,
  b: {
    c: 2,
    d: 3
  }
}

const copiedObj2 = { ...originalObj2 }

originalObj2.b.c = 322;

console.log(originalObj2.b.c); // 322
console.log(copiedObj2.b.c); // 322

// JSON.parse() & JSON.stringify() ==> to make a deep copy of the object

const copiedObj3 = JSON.parse(JSON.stringify(originalObj2))

console.log(originalObj2);
console.log(copiedObj3)

originalObj2.b.d = 988;

console.log(originalObj2.b.d); // 988
console.log(copiedObj3.b.d); // 3

// to create a deep copy of an array --> JSON.parse() & JSON.stringify()

const originalArray = [1, 2, [3, 4]];
const copiedArray = JSON.parse(JSON.stringify(originalArray));

copiedArray[2].push(100);

console.log(originalArray); // [ 1, 2, [ 3, 4 ] ]
console.log(copiedArray); // [ 1, 2, [ 3, 4, 100 ] ]

