var inquirer = require('inquirer');
var game = require('./game.js');
var word = require('./word.js');
var letter = require('./letter.js');
var letters = require('./letters.js');
var wordToGuess;







 console.log("Welcome to Hangman!\nYour word has been generated. \n");
            console.log("--------------------------------------------------------------------------------");

function Game() {
    //    console.log(JSON.stringify(wordToGuess, null, 2));

    if (wordToGuess.guessCounter > 0 && wordToGuess.wordComplete == false) {
        inquirer.prompt([{
            name: "guess",
            message: "Letter?"
        }]).then(function(letter) {
           console.log("\n");
          //  var myLetter = letter.guess.toLowerCase();
            wordToGuess.currentLetterGuess = letter.guess.toLowerCase(); //myLetter;

            wordToGuess = word.CheckArrayForLetter(wordToGuess, wordToGuess.currentLetterGuess); 					// check if letter submitted is present - advise user
            letters.setScreenArray(wordToGuess); 									// set screen results with updated letter info
           	word.AlphabetArrayUpdate(wordToGuess);
           	let currentWord = wordToGuess.screenArray.toString().replace(/,/g, " ");// 
           	let currentAlphabet = wordToGuess.alphabet.toString().replace(/,/g, "");
			console.log(currentWord + "\n\n");
			console.log("Available letters" + "");
			console.log(currentAlphabet + "\n\n");
			wordToGuess = word.CheckForSuccess(wordToGuess);					// check for success or failure

            console.log("--------------------------------------------------------------------------------\n");

            // console.log(JSON.stringify(wordToGuess.locationArray, null, 2));
            Game();
        })
    } else {
    	letters.GetResults(wordToGuess, wordToGuess.wordComplete);
        console.log("Game over");
    }
}




function StartGame(start, PlayGame) {
    wordToGuess = game.wordToGuess;
    //console.log(JSON.stringify(wordToGuess, null, 2));
    Game();


}


StartGame();
