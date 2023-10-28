// if (4/2 === 3 || 3+2 === 15 ){
//   console.log("this is true")
// } else {
//   console.log("this statement is false");
// }

if (!true){
    console.log("this is false")
  } else {
    console.log("this is true")
  }
  
  let name;
  console.log(name); // undefined
  
  // let price = null;
  // console.log(price);
  
  if (!'false') {
    console.log('Passed thingy is truthy');
  } else {
    console.log('Passed thingy is falsy');
  }
  
  // => 'Passed thingy is truthy'
  
  // assignment vs. comparison (= vs. == or ===)
  
  let x = 5; // type of number
  let y = "5"; // type of string
  
  console.log(`Is this equal: ${x == y}`); // Is this equal: true
  console.log(`Is this equal: ${x === y}`); // Is this equal: false
  
  console.log(`is this the same: ${"j" === "J"}`); // false
  
  let city = 'miami';
  console.log(city[0]); // <== m
  city[0] = 'M';
  console.log(city); // <== miami
  
  city = "belgrade";
  
  console.log("2:", city); // belgrade
  
  city[0] = "B";
  console.log("3:", city); // belgrade
  
  let message = "don't be sad, be happy!";
  let messageSubstring = message.slice(0,5)
  console.log(messageSubstring); // don't
  console.log("message: ", message); // don't be sad, be happy!
  