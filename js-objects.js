// properties => key-value pairs
// {}

// key - is always unique
// key - always has just one value associated with it

const product = {
    // prop1: value1,
    // ...
  }; // creating object using object literal approach
  
  const book = new Object(); // creating object using new keyword or using objects constructor syntax
  
  // book.author = "some name";
  
  // String()
  // Number()
  // Object()
  // Array()
  
  const student = {
    firstName: "marcelo",
    lastName: "via",
    bootcamp: "web dev",
    favorites: ["JS", "HTML"],
    isCareerChanger: true
  }
  
  console.log(`Student first name is: ${student.firstName}.`);
  console.log(`Student last name is: ${student["lastName"]}.`);
  
  // update the property value
  
  student.isCareerChanger = false;
  
  // add properties
  
  student.year = 2023;
  
  console.log("add: ", student);
  
  // remove properties
  
  delete student.bootcamp;
  
  console.log("remove: ", student);
  
  // list object keys
  
  console.log(Object.keys(student)); // [ 'firstName', 'lastName', 'favorites', 'isCareerChanger', 'year' ]
  
  // list object values
  
  console.log(Object.values(student)); // [ 'marcelo', 'via', [ 'JS', 'HTML' ], true, 2023 ]
  
  // loop through object properties
  
  for (let key in student){ // "key" is the placeholder, could be any word
    console.log(key);
  }
  
  // firstName
  // lastName
  // favorites
  // isCareerChanger
  // year
  
  // check if property exists in the object
  
  console.log("firstName" in student); // true
  console.log("bootcamp" in student); // false  