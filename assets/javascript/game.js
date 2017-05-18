//HW3 - Psychic Game - GCLOU

//js for Psychic Game

//create variables
var wins = 0;
var losses = 0;
//tokens per round
var tokens=9;
var userGuess="";
var computerGuess="";
//array to contain user input each round
var guessList=[];
//create array for computer
var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t", "u","v","w","x","y","z"];

//function to compare inputs
function match() {
      if (guessConverted === computerGuess) {
      wins++;
      //sound effect to notify winning
      var sound = new Audio("assets/media/cheering.wav");
      sound.play();
      document.getElementById('game').innerHTML = ("You won! ");
      //window object invokes game-reset function
      window.resetGame();
    } else if (guessConverted !== computerGuess) {
        //check if any tken left
        if (tokens === 0) {
        losses++;
        //window object invokes game-reset function
        window.resetGame();
      }
    } else {
      document.getElementById('display').innerHTML = ("You entered an invalid key. ");
    }
    //print scores
    var html = "<h3>Scores:</h3>" + "<br>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + tokens + "</p>" +
    "<p>Your Guesses So Far: " + guessList + "</p>";
    document.querySelector("#display").innerHTML = html;
}//match ends

// function to reset game
function resetGame() {
tokens=9;
guessList=[];
}//reset ends