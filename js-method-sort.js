// .sort()
// mutates the original array so we need to make a copy before we start sorting it
// puts elements of the original array in certain order
// returns a new array of the same length
// always sorts by a STRING value (even if it is an array of numbers)

const unsortedArray = [1, 4, 2, 11, 42];

const sortedArray = [...unsortedArray].sort();

console.log(sortedArray)

const x = "11";
const y = "2";

console.log(x < y); // true

// using a compare function

function compareFunctionAscending(num1, num2){ // Ascending order

  // <0 --> num1 comes first
  // >0 ---> num2 comes first
  // =0 ---> nothing changes

  return num1 - num2 
}

function compareFunctionDescending(num1, num2){ // Descending order

  // <0 --> num2 comes first
  // >0 ---> num1 comes first
  // =0 ---> nothing changes

  return num2 - num1
}



const sortedArray2 = [...unsortedArray].sort((num1, num2) => num2 - num1);

console.log("sortedArray2: ", sortedArray2)


const randomWords = ["Hello", "great", "First", "A", "a", "how"];

const sortedRandomWords = [...randomWords].sort();

console.log(sortedRandomWords); // [ 'A', 'First', 'Hello', 'a', 'great', 'how' ]

const sortedRandomWords2 = [...randomWords].sort((a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();

  if(a > b){
    return 1 // positive number
  } else if (a < b){
    return -1
  } else {
    return 0
  }
  
});

console.log(sortedRandomWords2); // [ 'A', 'a', 'First', 'great', 'Hello', 'how' ]

const sortedRandomWordsDesc = [...randomWords].sort((a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();

  if(a < b){
    return 1
  } else if (a > b){
    return -1
  } else {
    return 0
  }
});

console.log(sortedRandomWordsDesc); // [ 'how', 'Hello', 'great', 'First', 'A', 'a' ]

const sortedByLength = [...randomWords].sort((word1, word2) => {
  word1 = word1.toLowerCase();
  word2= word2.toLowerCase();

  if(word1.length > word2.length){
    return 1 // positive number
  } else if (word1.length < word2.length){
    return -1
  } else {
    return 0
  }
});

// If the result is negative, it means that "word1" should come before "word2" in the sorted array (shorter strings come before longer strings).
// If the result is positive, it means that "word2" should come before "word1" (longer strings come before shorter strings).
// If the result is zero, it means that "word1" and "word2" have the same length and their order remains unchanged.

console.log(sortedByLength); // [ 'A', 'a', 'how', 'Hello', 'great', 'First' ]