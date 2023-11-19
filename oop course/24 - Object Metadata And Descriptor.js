/*
  Object Meta Data
  writable
  enumerable
  configurable
  ============
  Object.defineProperty(obj, prop, descriptor)
*/

const myObject = {
    a: 1,
    b: 2,
  };
  
  Object.defineProperty(myObject, "c", {
    writable: false,
    enumerable: false,
    configurable: true,
    value: 3,
  });
  
  Object.defineProperty(myObject, "c", {
    writable: true,
  });
  
  // console.log(delete myObject.c); // Will Not Delete Because configurable is False
  myObject.c = 500; // Will Not Change Because writable is False
  
  console.log(myObject);
  
  console.log("#".repeat(10));
  
  for (let prop in myObject) {
    console.log(prop, myObject[prop]);
  }
  
  console.log("#".repeat(10));
  
  console.log(Object.getOwnPropertyNames(myObject));