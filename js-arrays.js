const animals = ["dog", "cat", "fish"];
const mixedArr = [3, "fish", true, [], { name: "marcelo" }, "", null, ["book", "movie"]];

// zero indexed
// length property - remember it is not followed by "()"

// all methods that can add or remove elements from the array - they are also mutating original arrays

// .push() - adds elements to the end of the array 

animals.push("tiger");
console.log(animals); // [ 'dog', 'cat', 'fish', 'tiger' ]

// // .unshift() - adds elements to the beginning of the array 
animals.unshift("lion");
console.log(animals); // [ 'lion', 'dog', 'cat', 'fish', 'tiger' ]

// // .splice() - inserts or removes element(s) to/from specific indexes

animals.splice(2, 0, "horse");
console.log(animals); // [ 'lion', 'dog', 'horse', 'cat', 'fish', 'tiger' ]

animals.splice(3, 2, "monkey");
console.log(animals); // [ 'lion', 'dog', 'cat', 'fish', 'tiger' ]

animals.splice(2, 1);
console.log(animals);

// .shift() - to remove 1st element
animals.shift();
console.log(animals); // [ 'dog', 'monkey', 'tiger' ]

// .pop() - to remove last elements

animals.pop();
console.log(animals); // [ 'dog', 'monkey' ]

for (let i = 0; i < mixedArr.length; i++){
  console.log(`element is: ${mixedArr[i]}`)
}

mixedArr.forEach(function(elem){
  console.log(`element: ${elem}`)
})

mixedArr.forEach((e, i) => {
  console.log(`element: ${e} - index: ${i}`)
})

const fruits = ["apple", "orange", "plum"];

for (let oneFruit of fruits){
  console.log(oneFruit)
}

// ❌ NOT TO DO ❌
const originalArray = [1, 3, 5];
const copyOfOriginal = originalArray;

// copyOfOriginal.push(7);

console.log(originalArray); // [ 1, 3, 5, 7 ]
console.log(copyOfOriginal); // [ 1, 3, 5, 7 ]

// ✅ DO ✅

// spread operator [...]
const copyOfOriginalArray = [...originalArray];
copyOfOriginalArray.push(101);
console.log(originalArray); // [ 1, 3, 5 ]
console.log(copyOfOriginalArray); // [ 1, 3, 5, 7, 101 ]

// .concat()

const arr1 = ["berries", "bananas"];
const arr2 = arr1.concat("peaches");

console.log(arr1); // [ 'berries', 'bananas' ]
console.log(arr2); // [ 'berries', 'bananas', 'peaches' ]

// let's merge fruits and arr1

const newFruitsArr = [...fruits, ...arr1];
console.log(newFruitsArr); // [ 'apple', 'orange', 'plum', 'berries', 'bananas' ]

const newFruitsArr2 = fruits.concat(arr1);
console.log(newFruitsArr2); // [ 'apple', 'orange', 'plum', 'berries', 'bananas' ]
console.log(fruits); // [ 'apple', 'orange', 'plum' ]

const newArr3 = [...newFruitsArr2];
newArr3.pop();
console.log(newArr3); // [ 'apple', 'orange', 'plum', 'berries' ]

// check if "newFruitsArr" is actually an array

console.log(Array.isArray(newFruitsArr));  // true

if(Array.isArray(newFruitsArr)){
  // do something with this array
} else {
  // say pass an array as this is not type of array
}
