import { PlanetAge } from  './dice-game.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
    $("#ageInput").submit(function(event){
      event.preventDefault();
      
      let userInput = parseInt($("#userAgeInput").val());
      console.log(userInput);



    });
});












// function test2() {
//   console.log('this is the front end');
// } test2();



//Front-end logic

// On the form submit, collect the user input in earth years. Create a new instance of that class based on that users input.
