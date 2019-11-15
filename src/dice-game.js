export function test() {
  console.log('this is the back-end');
} test();

//Example code for running tests in jest.test.js//

export var MyObject = function(number1,number2,number3){

  this.number1 = number1,
  this.number2= number2,
  this.number3 = number3

}

MyObject.prototype.multiplyNumbers = function() {
  var multiply = this.number1 * this.number2;
  return multiply;
}

export var MyObject2 = function(number1,number2,number3){

  this.number1 = number1,
  this.number2= number2,
  this.number3 = number3

}

MyObject2.prototype.multiplyNumbers = function() {
  var multiply = this.number1 + this.number2;
  return multiply;
}

//Example code for running tests in jest.test.js//

Backend logic:

Write 5 methods:

-Calculate Mercury age (.24 earth years)
-Calculate Venus age (.62 earth years)
-Calculate Mars age (1.88 earth years)
-Calculate Jupiter age (11.86 eartj uears)
-Calculate years left to live on each planet (assume average human lives to 85 on earth). If they are above average life expectancy, return how many years they have live passed life expectancy.

make sure to use let and const, define objects using classes
