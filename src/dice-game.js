
export class PlanetAge{
  constructor(earthAge){
    this.earthAge = earthAge;
    this.earthAverageLife = 85;
    this.mercuryAge = this.mercuryAgeCalc();
    this.mercuryYearsRemaining = this.mercuryYearsLeft();
    this.venusAge = this.venusAgeCalc();
    this.venusYearsRemaining = this.venusYearsLeft();
    this.marsAge = this.marsAgeCalc();
    this.marsYearsRemaining = this.marsYearsLeft();
    this.jupiterAge = this.jupiterAgeCalc();
    this.jupiterYearsRemaining = this.jupiterYearsLeft();


  }
    mercuryAgeCalc(){
      let mercAge = Math.round(this.earthAge / 0.24);
      return mercAge;

    }

    mercuryYearsLeft(){
      let mercAge = Math.round(this.earthAge / 0.24);
      let mercAverageLife = Math.round(this.earthAverageLife / .24);
      let mercTimeLeft = mercAverageLife - mercAge;
      return mercTimeLeft;

    }

    venusAgeCalc(){
      let venusAge = Math.floor(this.earthAge / 0.62);
      return venusAge;

    }

    venusYearsLeft(){
      let venusAge = Math.round(this.earthAge / 0.62);
      let venusAverageLife = Math.round(this.earthAverageLife / .62);
      let venusTimeLeft = venusAverageLife - venusAge;
      return venusTimeLeft;

    }

    marsAgeCalc(){
      let marsAge = Math.floor(this.earthAge / 1.88);
      return marsAge;

    }

    marsYearsLeft(){
      let marsAge = Math.floor(this.earthAge / 1.88);
      let marsAverageLife = Math.floor(this.earthAverageLife / 1.88);
      let marsTimeLeft = marsAverageLife - marsAge;
      return marsTimeLeft;

    }

    jupiterAgeCalc(){
      let jupiterAge = Math.floor(this.earthAge / 11.86);
      return jupiterAge;

    }



    jupiterYearsLeft(){
      let jupiterAge = Math.floor(this.earthAge / 11.86);
      let jupiterAverageLife = Math.floor(this.earthAverageLife / 11.86);
      let jupiterTimeLeft = jupiterAverageLife - jupiterAge;
      return jupiterTimeLeft;

    }

};




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
