// $(document).ready(function(){

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var computerGuess;
var wins = 0;
var losses = 0;
var guesses = 9;
var lettersGuessed = [];

var w = document.getElementById("wins");
var l = document.getElementById("losses");
var g = document.getElementById("guesses");
var u = document.getElementById("userGuesses");

computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function(event) {
    var userGuess = event.key;

    console.log (computerGuess);

    if(userGuess != computerGuess) { 
        alert('Wrong! You have '+ guesses+ ' guesses left');
        guesses--;
        lettersGuessed.push(userGuess);
    } 
    else { 
        alert('You won! Game will reset on next key press');
        wins++;
        guesses = 9;
        lettersGuessed = [];
    } 

    if (guessesLeft == 0) {
        alert('Sorry, you lost. Game will reset on next key press');
            losses++;
            guesses = 9;
        lettersGuessed = [];
    } 

    w.textContent = ("wins: " + wins);
    l.textContent = ("losses: " + losses);
    g.textContent = ("guesses left: " + guesses);
    u.textContent = ("Your guesses so far: " + userGuess);

    
}