// Different kind of braces - all are mandatory in JS

// Parentheses ()
// Curly braces {}
// Square brackets []

// VARIABLES

// We use variables to store some information. We can imagine them as some kind of boxes, in which we place some data.
// To be able to re-access this data, we need to name them somehow. 


console.log("My name is Bob, and I'm writing JavaScript");

// --> single line comment

// --> below is a multiple line comment
/* d,a;dk;akf;ja
f;akf;ka;fka; */

// 3 ways of declaring vars in JS:

// var
// let
// const

let student; // var. declaration
console.log("--> ", student); // undefined
student = "marcelo"; // var. assignment
console.log("--> ", student); // marcelo

let firstName = "alberto";
firstName = "sandra"; // re-assignment -> NOT always the best thing
console.log("first name: ", firstName); // alberto

// 🚨can't name variables with number starting nor with JS reserved words:
// let 3students; --> not valid
// let LastName --> not recommended unless a class

// class, let, const, function, if, else, ... --> we can't use reserved words for var. names

// let price, tax, total; // multiple var. declaration (this is ok)

// camelCase --> firstName
// snake_case --> first_name

const name = 'Ana'; // single quotes

// name = 'Maria'; // reassignment not allowed with const
console.log("name: ", name);

let pizza = 'margherita is "the best"';

console.log(pizza);

// const university; // needs to be declared at the same time when initialized