const language = prompt("Please enter the language - (options: spanish, french, english): ");
const name = prompt("Please enter your name:");

switch(language){
  case "spanish":
    console.log(`Hola, ${name}`);
    break;
  case "french":
    console.log(`Salut, ${name}`);
    break;
  case "english":
    console.log(`Hello, ${name}`);
    break;
  default:
    console.log("I am not sure what are you trying to do, sorry! 🍺");
}

// We use parseInt() to convert the user's input from a string to a number, 
// which is required for the switch statement to work properly.

let userInput = parseInt(prompt("Enter a number between 1 and 7 (inclusive)"));

switch (userInput) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid input");
    break;
}