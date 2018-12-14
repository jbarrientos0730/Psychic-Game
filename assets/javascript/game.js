

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var computerGuess;
var wins = 0;
var losses = 0;
var guesses = 9;
var lettersGuessed = "";

var w = document.getElementById("wins");
var l = document.getElementById("losses");
var g = document.getElementById("guesses");
var u = document.getElementById("userGuesses");

computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function(event) {
    var userGuess = event.key;

    console.log (computerGuess);

    if(userGuess == computerGuess){
        alert("User Guess: " + userGuess + " was correct");
        wins++;
    }

    else{
        if(guesses > 0){
            guesses--;
            alert("Incorrect choice. Guesses left: " + guesses + ". Try again.");
        }

        else{
            alert("Game Over. Please Refresh the page to try again.");
        }
    }

    w.textContent = ("wins: " + wins);
    l.textContent = ("losses: " + losses);
    g.textContent = ("guesses left: " + guesses);
}