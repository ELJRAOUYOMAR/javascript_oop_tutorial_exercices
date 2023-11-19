/*
  JavaScript Accessors
  Getters & Setters
  Javascript don't use the main functionality of get and set, like accessing to the private propreties, 
  this option (private propreties) don't exists in javascript.  
*/

class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
    sayHello() {
      return `Hello ${this.name}`;
    }
    get showInfo() {
      return `Name: ${this.name}, Email" ${this.email}`;
    }
    changeName(newName) {
      this.name = newName;
    }
    // this is like proprity not method
    set changeEmail(newEmail) {
      this.email = newEmail;
    }
  }
  
  let user1 = new User("Osama", "o@nn.sa");
  
  console.log(user1.name);
  console.log(user1.email);
  console.log(user1.showInfo);
  
  user1.changeName("Mahmoud");
  console.log(user1.name);
  console.log(user1.showInfo);
  
  user1.changeEmail = "oooo@gmail.com";
  console.log(user1.name);
  console.log(user1.email);
  console.log(user1.showInfo);