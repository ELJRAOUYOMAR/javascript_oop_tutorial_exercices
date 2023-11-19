/*
  Class
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
  }
  
  let user1 = new User("Osama", "o@nn.sa");
  let user2 = new User("Ahmed");
  
  console.log(user1);
  console.log(user2);