import { PlanetAge } from  './dice-game.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  function lifeOutput(life){
    if(life < 0){
      return "Woah! you are beating the average life expectancy by: " + Math.abs(life);

    }else {return "You have " + life + " years left to live.";}

  }


    $("#ageInput").submit(function(event){
      event.preventDefault();
      let userInput = parseInt($("#userAgeInput").val());
      let planetAge = new PlanetAge(userInput);


      $("#output").text("Your age on Mercury is: " + planetAge.mercuryAge);
      $("#output2").text("Your age on Venus is: " + planetAge.venusAge);
      $("#output3").text("Your age on Mars is: " + planetAge.marsAge);
      $("#output4").text("Your age on Jupiter is: " + planetAge.jupiterAge);

      $("#yearsToLive").text("Below is your life expectancy for each planet respectivly: ");

      //below will print life expectancy for each planet
      $("#output5").text("Mercury: " + lifeOutput(planetAge.mercuryYearsRemaining));
      $("#output6").text("Venus: " + lifeOutput(planetAge.venusYearsRemaining));
      $("#output7").text("Mars: " + lifeOutput(planetAge.marsYearsRemaining));
      $("#output8").text("Jupiter: " +lifeOutput(planetAge.jupiterYearsRemaining));







    });
});












// function test2() {
//   console.log('this is the front end');
// } test2();



//Front-end logic

// On the form submit, collect the user input in earth years. Create a new instance of that class based on that users input.
