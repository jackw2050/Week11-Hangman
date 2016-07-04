var randomWord = require('random-word');


// get random word from api
// if time maybe create object with themed arrays of words

// Constructor for game object
function GameWord(word) {
    this.word = word,
        this.goodGuess = false,
        this.wordArray = [],
        this.screenArray = [],
        this.lettersUsed = [],
        this.locationArray = [],
        this.guessCounter = 0,
        this.wordComplete = false,
        this.mistakesAllowed = 6,
        this.currentLetterGuess = '',
        this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
}
GameWord.prototype.SplitString = function() {
    this.wordArray = this.word.split("");
    // console.log(JSON.stringify(this.wordArray, null, 2));
}
GameWord.prototype.makeCompletedArray = function() {
    for (var i = 0; i < this.wordArray.length; i++) {
        this.screenArray[i] = "_";
    }
    //console.log(JSON.stringify(this.wordArray, null, 2));
}

function CreateNewWord() {
    var myWord = new GameWord(randomWord());
    myWord.SplitString();
    myWord.makeCompletedArray();
    return myWord;
}

exports.wordToGuess = CreateNewWord();
