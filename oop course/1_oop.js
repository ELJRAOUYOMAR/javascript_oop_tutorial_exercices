/*
  Defining Object
  [1] Object Literal
*/

let user = {
    // Properties
    firstName: "Osama",
    lastName: "Elzero",
    age: 37,
    addresses: {
      eg: "Giza",
      usa: "California",
      ksa: "Riyadh",
  
      getMainAddress: function () {
        return `Main Address Is In Egypt In City ${user.addresses.eg}`;
      },
    },
  
    // Methods
    // getFullName: function () {
    //   return `Full Name: ${user.firstName} ${user.lastName}`;
    // },
    getFullName: () => `Full Name: ${user.firstName} ${user.lastName}`,
  
    getAgeInDays: () => `Your Age In Days Is ${user.age}`,
  };
  
  //defining object using new keyword
  let user2 = new Object();
  user2.firstName = "Karam"; 
  user2.lastName = "Karam";
  user.age = 27;
  console.log(user2) 
  // Accessing Object Properties
  console.log(user.firstName); // Dot Notation
  console.log(user["firstName"]); // Bracket Notation
  
  console.log(typeof user.firstName); // String
  
  console.log(user.addresses.eg);
  console.log(user["addresses"]["ksa"]);
  
  // Accessing Object Methods
  console.log(typeof user.getFullName); // Function
  console.log(user.getFullName());
  console.log(user.getAgeInDays());
  
  console.log(user.addresses.getMainAddress());