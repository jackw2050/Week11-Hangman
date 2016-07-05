var inquirer = require('inquirer');
var game = require('./game.js');
var word = require('./word.js');
var letter = require('./letter.js');
var letters = require('./letters.js');
var wordToGuess;


//console.log(JSON.stringify(wordToGuess, null, 2));




// console.log("Welcome to Hangman!\nYour word has been generated.");

function Game() {
    //    console.log(JSON.stringify(wordToGuess, null, 2));

    if (wordToGuess.guessCounter > 0 && wordToGuess.wordComplete == false) {
        inquirer.prompt([{
            name: "guess",
            message: "Letter?"
        }]).then(function(letter) {


            var myLetter = letter.guess.toLowerCase();

            //console.log(JSON.stringify(wordToGuess, null, 2));
            wordToGuess.currentLetterGuess = myLetter;

            wordToGuess = word.CheckArrayForLetter(wordToGuess); 				// check if letter submitted is present - advise user
            letters.setScreenArray(wordToGuess); 								// set screen results with updated letter info
            console.log(wordToGuess.screenArray.toString().replace(/,/g, " ")); // print new word array to screen
//			console.log("checking for success");
			wordToGuess = word.CheckForSuccess(wordToGuess);					// check for success or failure

            

            console.log("--------------------------------------------------------------------------------");

            // console.log(JSON.stringify(wordToGuess.locationArray, null, 2));
            Game();
        })
    } else {
    	letters.GetResults(wordToGuess);
        console.log("game over");
    }
}




function StartGame(start, PlayGame) {
    wordToGuess = game.wordToGuess;
    Game();


}


StartGame();
