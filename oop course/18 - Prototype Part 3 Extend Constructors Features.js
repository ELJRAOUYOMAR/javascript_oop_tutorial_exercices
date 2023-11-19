/*
  Prototype
*/

let myString = "Osama";

console.log(String.prototype);

String.prototype.zFill = function (width) {
  let theResult = this;

  while (theResult.length < width) {
    theResult = `0${theResult}`;
  }

  return theResult.toString();
};

console.log("12".zFill(6));
console.log("516".zFill(6));
console.log("3625".zFill(6));
console.log("25145".zFill(6));
console.log("987654".zFill(6));

String.prototype.sayYouLoveMe = function () {
  return `I Love You ${this}`;
};

console.log("Osama".sayYouLoveMe());