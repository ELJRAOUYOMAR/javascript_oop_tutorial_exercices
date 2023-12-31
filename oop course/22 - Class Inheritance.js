/*
  Class
  Inheritance
*/

class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
    sayHello() {
      return `Hello ${this.name}`;
    }
    showEmail() {
      return `Your Email Is ${this.email}`;
    }
    writeMsg() {
      return `Message From Parent Class`;
    }
  }
  
  class Admin extends User {
    constructor(name, email) {
      super(name, email);
    }
    adminMsg() {
      return `You Are Admin`;
    }
    //override method 
    writeMsg() {
      return `Message From Child Class`;
    }
  }
  
  let admin1 = new Admin("Osama", "o@nn.sa");
  console.log(admin1.showEmail());
  console.log(admin1.writeMsg());