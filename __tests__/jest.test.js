
//Example testing for template//

import { MyObject, MyObject2, PlanetAge } from './../src/dice-game.js'

// describe('MyObject', () => {
//
//     test('should record three numbers from the user', () => {
//       var myObject= new MyObject(4,6,9);
//       expect(myObject.number1).toEqual(4);
//       expect(myObject.number2).toEqual(6);
//       expect(myObject.number3).toEqual(9);
//
//
//     });
//
// });
//
// describe('Numbers Multiply', () => {
//
//     test('should return the product of two numbers', () => {
//       var myObject= new MyObject(4,6,9);
//       expect(myObject.multiplyNumbers()).toEqual(24);
//
//     });
//
// });
//
// describe('Numbers Multiply', () => {
//
//     test('should return the product of two numbers', () => {
//       var myObject= new MyObject2(4,6,9);
//       expect(myObject.multiplyNumbers()).toEqual(10);
//
//     });
//
// });

describe('Planet Age', () => {

    test('should take the user input in years, and set age/years left to live on all other planets to 0', () => {
      var planetAge = new PlanetAge(27);
      expect(planetAge.earthAge).toEqual(27);
      expect(planetAge.mercuryAge).toEqual(0);
      expect(planetAge.mercuryYearsRemaining).toEqual(0);
      expect(planetAge.venusAge).toEqual(0);
      expect(planetAge.venusYearsRemaining).toEqual(0);
      expect(planetAge.marsAge).toEqual(0);
      expect(planetAge.marsYearsRemaining).toEqual(0);
      expect(planetAge.jupiterAge).toEqual(0);
      expect(planetAge.jupiterYearsRemaining).toEqual(0);
      expect(planetAge.earthAverageLife).toEqual(85);

    });

});

describe('Mercury Age', () => {

    test('should return the users age on Mercury', () => {
      var planetAge= new PlanetAge(27);
      expect(planetAge.mercuryAgeCalc()).toEqual(113);

    });

});

describe('Mercury Time Left', () => {

    test('should return the amount of years the user will live on mercury', () => {
      var planetAge= new PlanetAge(27);
      expect(planetAge.mercuryYearsLeft()).toEqual(241);

    });

});

describe('Venus Age', () => {

    test('should return the users age on venus', () => {
      var planetAge= new PlanetAge(27);
      expect(planetAge.venusAgeCalc()).toEqual(43);

    });

});

describe('Venus Time Left', () => {

    test('should return the amount of years the user will live on venus', () => {
      var planetAge= new PlanetAge(27);
      expect(planetAge.venusYearsLeft()).toEqual(93);

    });

});

describe('Mars Age', () => {

    test('should return the users age on mars', () => {
      var planetAge= new PlanetAge(27);
      expect(planetAge.marsAgeCalc()).toEqual(14);

    });

});

describe('Mars Time Left', () => {

    test('should return the amount of years the user will live on Mars', () => {
      var planetAge= new PlanetAge(27);
      expect(planetAge.marsYearsLeft()).toEqual(31);

    });

});

describe('Jupiter Age', () => {

    test('should return the users age on jupiter', () => {
      var planetAge= new PlanetAge(27);
      expect(planetAge.jupiterAgeCalc()).toEqual(2);

    });

});


describe('Jupiter Time Left', () => {

    test('should return the amount of years the user will live on jupiter', () => {
      var planetAge= new PlanetAge(27);
      expect(planetAge.jupiterYearsLeft()).toEqual(5);

    });

});

//Example testing for template//
