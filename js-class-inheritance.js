// Classes - templates for creating objects
// Object - an instance of a class
// camelCase - first letter have to be UPPERCASE
// class names are always in singular

// encapsulation
// abstraction
// inheritance

class Person {
  
    constructor(par1, par2, par3){
      this.name = par1;
      this.lastName = par2;
      this.age = par3;
  
      this.userId = parseInt(Math.random() * 10000);
      this.isActive = true;
      
    }
  
    sayName(){
      console.log(`My name is ${this.name}.`)
    }
  
    getOlder(){
      this.age +=1
    }
  
    toggleSubscription(){
      this.isActive = !this.isActive;
    }
    
  }
  
  // we use the "new" keyword to create instances of class
  const person1 = new Person("Alberto", "S", 18);
  const person2 = new Person("Marcelo", "V", 30);
  person2.toggleSubscription()
  console.log(person2.isActive); // false
  
  class Player extends Person {
  
    constructor(name, lastName, age, nickname, lives, cash){
  
      super(name, lastName, age); // with super we avoid having to write this.name = name, this.lastName = lastName,... because these are shared properties between Person and Player classes
  
      this.nickname = nickname;
      this.lives = lives;
      this.cash = cash;
  
      this.level = 1;
    }
  
    spendCash(amount){
      this.cash -= amount;
    }
  
    changeLives(number){
      this.lives += number;
    }
  
    end(){
      this.level = 1
    }
  }
  
  const player1 = new Player("german", "rodriguez", 33, "theBestPlayer123", 10, 3000);
  
  console.log(player1);
  
  player1.spendCash(1200);
  console.log(`Cash leftover: ${player1.cash}`); // 1800
  
  player1.toggleSubscription();
  console.log(`Updated subscription: ${player1.isActive}`); // Updated subscription: false