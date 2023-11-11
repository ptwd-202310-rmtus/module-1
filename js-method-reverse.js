// .sort()
// mutates the original array so we need to make a copy before we start reversing it
// puts elements of the original array in reversed order (not sorting them, just reversing them)
// returns a new array of the same length

const nums = [1, 3, 2, 4, 5];

const numsRev = [...nums].reverse();
console.log(numsRev); // [ 5, 4, 2, 3, 1 ]
