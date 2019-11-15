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

export class PlanetAge{
  constructor(earthAge){
    this.earthAge = earthAge,
    this.mercuryAge = 0,
    this.mercuryYearsRemaining = 0,
    this.venusAge = 0,
    this.venusYearsRemaining = 0,
    this.marsAge = 0,
    this.marsYearsRemaining = 0,
    this.jupiterAge = 0,
    this.jupiterYearsRemaining = 0,
    this.earthAverageLife = 85

  }
    mercuryAgeCalc(){
      let mercAge = this.earthAge / 0.24;
      return mercAge;

    }

    mercuryYearsLeft(){
      let mercAge = this.earthAge / 0.5;
      let mercAverageLife = this.earthAverageLife / .5;
      let mercTimeLeft = mercAverageLife - mercAge;
      return mercTimeLeft;

    }
};


//Example code for running tests in jest.test.js//

// Backend logic:
//
// -create a class constructor that will take a users input in human years, and set output values (the age conversions and life expectancy to 0 initially)
//
// Write 5 methods:
//
// -Calculate Mercury age (.24 earth years)
// -Calculate Venus age (.62 earth years)
// -Calculate Mars age (1.88 earth years)
// -Calculate Jupiter age (11.86 eartj uears)
// -Calculate years left to live on each planet (assume average human lives to 85 on earth). If they are above average life expectancy, return how many years they have live passed life expectancy.
//
// make sure to use let and const, define objects using classes
