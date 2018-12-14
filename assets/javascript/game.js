var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var computerGuess;
var wins;
var losses;
var guesses;
var lettersGuessed;

var w = document.getElementById("win");
var l = document.getElementById("loss");
var g = document.getElementById("guess");

document.onkeyup = function(event) {
    var userGuess = event.key;

    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        
}