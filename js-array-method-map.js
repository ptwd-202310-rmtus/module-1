// .map()
// doesn't mutate the array
// always returns a new array of the same size
// you can achieve the same with map as with forEach, but map is more efficient, readable and best practice

const arr = [1, 2, 3];

// 
const newArr = [];
arr.forEach(num => {
  newArr.push(num * 3);
  return newArr
});

console.log(newArr);


const arr2 = [3, 4, 5];

const updatedArr = arr2.map(num => num * 2);
console.log(updatedArr);

console.log("arr2: ", arr2);


const arr3 = [10, 20, 30];

arr3.forEach((num, i) => arr3[i] = num * 3 );

console.log(arr3)