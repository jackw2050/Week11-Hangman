var inquirer = require('inquirer');
var game = require('./game.js');
var word = require('./word.js');
var letter = require('./letter.js');
var letters = require('./letters.js');
var wordToGuess;


//console.log(JSON.stringify(wordToGuess, null, 2));




// console.log("Welcome to Hangman!\nYour word has been generated.");

function Game() {
    console.log(JSON.stringify(wordToGuess, null, 2));
    if (wordToGuess.guessCounter < wordToGuess.mistakesAllowed && wordToGuess.wordComplete == false) {
        inquirer.prompt([{
            name: "guess",
            message: "Letter?"
        }]).then(function(letter) {

        
var myLetter = letter.guess.toLowerCase();

//console.log(JSON.stringify(wordToGuess, null, 2));
wordToGuess.currentLetterGuess = myLetter;

//console.log(JSON.stringify(wordToGuess.currentLetterGuess, null, 2));


//console.log("set to lower case");
            wordToGuess = word.CheckArrayForLetter(wordToGuess);
//console.log("ready to set letter");


            letters.setScreenArray(wordToGuess);
console.log("letter set");
            console.log(wordToGuess.screenArray.toString().replace(/,/g, " "));
            console.log("Letters remaining " + wordToGuess.alphabet.toString().replace(/,/g, " "));




            // console.log(JSON.stringify(wordToGuess.locationArray, null, 2));
            wordToGuess.guessCounter++;
            // PlayGame();
        })
    } else {
        //  game over
    }
}




function StartGame(start, PlayGame) {
    wordToGuess = game.wordToGuess;
    Game();


}


StartGame();
