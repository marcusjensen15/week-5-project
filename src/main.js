import { PlanetAge } from  './dice-game.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
    $("#ageInput").submit(function(event){
      event.preventDefault();
      let userInput = parseInt($("#userAgeInput").val());
      let planetAge = new PlanetAge(userInput);
      console.log(planetAge);
      $("#output").text("Your age on Mercury is: " + planetAge.mercuryAge);
      $("#output2").text("Your age on Venus is: " + planetAge.venusAge);
      $("#output3").text("Your age on Mars is: " + planetAge.marsAge);
      $("#output4").text("Your age on Jupiter is: " + planetAge.jupiterAge);







    });
});












// function test2() {
//   console.log('this is the front end');
// } test2();



//Front-end logic

// On the form submit, collect the user input in earth years. Create a new instance of that class based on that users input.
