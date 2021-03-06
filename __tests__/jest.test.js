
//Example testing for template//

import { PlanetAge } from './../src/dice-game.js'


describe('Planet Age', () => {

    test('should take the user input in years, and set age/years left to live on all other planets to 0', () => {
      let planetAge = new PlanetAge(27);
      expect(planetAge.earthAge).toEqual(27);
      expect(planetAge.mercuryAge).toEqual(113);
      expect(planetAge.mercuryYearsRemaining).toEqual(241);
      expect(planetAge.venusAge).toEqual(43);
      expect(planetAge.venusYearsRemaining).toEqual(93);
      expect(planetAge.marsAge).toEqual(14);
      expect(planetAge.marsYearsRemaining).toEqual(31);
      expect(planetAge.jupiterAge).toEqual(2);
      expect(planetAge.jupiterYearsRemaining).toEqual(5);


    });

});

describe('Mercury Age', () => {

    test('should return the users age on Mercury', () => {
      let planetAge= new PlanetAge(27);
      expect(planetAge.mercuryAgeCalc()).toEqual(113);

    });

});

describe('Mercury Time Left', () => {

    test('should return the amount of years the user will live on mercury', () => {
      let planetAge= new PlanetAge(27);
      expect(planetAge.mercuryYearsLeft()).toEqual(241);

    });

});

describe('Venus Age', () => {

    test('should return the users age on venus', () => {
      let planetAge= new PlanetAge(27);
      expect(planetAge.venusAgeCalc()).toEqual(43);

    });

});

describe('Venus Time Left', () => {

    test('should return the amount of years the user will live on venus', () => {
      let planetAge= new PlanetAge(27);
      expect(planetAge.venusYearsLeft()).toEqual(93);

    });

});

describe('Mars Age', () => {

    test('should return the users age on mars', () => {
      let planetAge= new PlanetAge(27);
      expect(planetAge.marsAgeCalc()).toEqual(14);

    });

});

describe('Mars Time Left', () => {

    test('should return the amount of years the user will live on Mars', () => {
      let planetAge= new PlanetAge(27);
      expect(planetAge.marsYearsLeft()).toEqual(31);

    });

});

describe('Jupiter Age', () => {

    test('should return the users age on jupiter', () => {
      let planetAge= new PlanetAge(27);
      expect(planetAge.jupiterAgeCalc()).toEqual(2);

    });

});


describe('Jupiter Time Left', () => {

    test('should return the amount of years the user will live on jupiter', () => {
      let planetAge= new PlanetAge(27);
      expect(planetAge.jupiterYearsLeft()).toEqual(5);

    });

});

//Example testing for template//
// replacing all var s with let
