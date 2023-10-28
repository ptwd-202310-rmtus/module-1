// DRY - Don't Repeat Yourself

// function declaration - creating a function

function printCoffeePrice(){
    console.log("Coffee price is 5$.");
  }
  
  // call -> invocationn (execute the fucntion)
  printCoffeePrice()
  
  // parameter is a placeholder - when we declare the fucntion
  function printProductPrice(product, price){
    return `${product} price is ${price}$.`
    // console.log("hello, i am after return"); --> anything that comes after "return" statement, doesn't exist for this function
  }
  
  // water -> argument (this is when we call the function)
  console.log(printProductPrice("water", 3));
  console.log(printProductPrice("bread", 7));
  console.log(printProductPrice("candy", 1.5));
  
  
  function printName(name){
    if(name.length === 0){
      return "Please provide a valid name.";
    } 
    
    return `Name is ${name}.`;
  }
  
  console.log(printName("sandra"));
  
  // {}
  // []
  
  // by default, functions can't return multiple values
  // to pass this limitation, we can pack multiple values into object or array and
  // have the function return that instead:
  function getUser(){
    const name = "ana";
    const age = 32;
  
    return {
      name, age
    }
  }
  
  const userInfo = getUser()
  console.log(`${userInfo.name} is ${userInfo.age}.`);
  
  let firstName = "alberto";
  let lastName = "sclocchi";
  let fullName = firstName + " " + lastName;
  console.log(fullName);
  
  // refactored:
  
  function getFullName(firstName, lastName){
    return firstName + " " + lastName
  }
  
  console.log(getFullName("alberto", "sclocchi"));