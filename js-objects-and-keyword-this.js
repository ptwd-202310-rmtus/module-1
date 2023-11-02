const person = {
    id: undefined,
    name: "john",
    lastName: "doe",
    age: 33,
    hasMotorbike: false,
    hobbies: ["reading", "hiking", "coding"],
    address: {
      street: "ironhack ave",
      number: 125,
      zip: 33139,
      city: "miami beach",
      state: "florida",
      phone: "+17863953102"
    },
  
    getOld(){
      this.age += 1;
    },
  
    getNewHooby(newHobby){
      this.hobbies.push(newHobby);
    },
  
    changePhoneNumber(newPhoneNum){
      this.address.phone = newPhoneNum;
    }
  }
  
  person.getOld();
  console.log(person.age);
  
  person.changePhoneNumber("+144488899765");
  console.log(person.address.phone); // +144488899765