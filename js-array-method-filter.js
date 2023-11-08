// .filter()
// doesn't mutate the array
// returns a new array of the usually smaller size based on the condition
// you can achieve the same with map as with forEach, but filter is more efficient, readable and best practice

const numbers = [3, 7, 9, 10, 12];

const divisibleByThree = numbers.filter(num => {
  if (num % 3 === 0){
    return num
  }
})

console.log(divisibleByThree)

// const divisibleByThree2 = numbers.filter(num => num % 3 === 0)
// console.log(divisibleByThree2)

const filtered = [];
for (const num of numbers){
  if (num % 3 === 0){
    filtered.push(num)
  }
}

console.log(filtered)

