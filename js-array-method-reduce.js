// .reduce()
// doesn't mutate the original array
// returns just a single variable that is a "sum"

const prices = [3, 4, 5];

// .forEach()

let sum = 0;

prices.forEach(price => sum += price);

console.log(`sum is: ${sum}`);

// .reduce()
const sum2 = prices.reduce((accum, currentValue) => {
  return accum + currentValue
}, 10);

console.log(sum2);

const products = [
  {
    name: "pen",
    price: "3.99"
  },
  {
    name: "tea",
    price: "5.99"
  },
  {
    name: "mug",
    price: "7.49"
  }
]

const productPricesSum = products.reduce((accum, currVal) => {
  // console.log("accum: ", accum)
  // return accum + (+currVal.price)
  return accum + Number(currVal.price)
  // return accum + parseInt(currVal.price) -> no
}, 0)

console.log(productPricesSum)
