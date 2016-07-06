exports.setScreenArray = function(wordObject) {
    //   console.log("Array length = " + wordObject.locationArray.length);
    let alphaIndex = wordObject.alphabet.indexOf(wordObject.currentLetterGuess.toUpperCase());
    if (alphaIndex >= 0) {
        if (wordObject.locationArray.length > 0) {
            return ReplaceLetters(wordObject);
        } else {
            wordObject.guessCounter--;
            console.log("letter not found.  " + "\t" + wordObject.guessCounter + " guesses remain.\n");
            return wordObject;
        }
    } else {
        console.log("This letter has already been used.  Please try again.\n");
    }
}

function CheckRepeatGuess() {
    console.log(wordObject.alphabet.indexOf(wordObject.currentLetterGuess.toUpperCase()));
    return wordObject.alphabet.indexOf(wordObject.currentLetterGuess.toUpperCase());
}


function ReplaceLetters(wordObject) {
    for (var index = 0; index < wordObject.locationArray.length; index++) {
        wordObject.screenArray[wordObject.locationArray[index]] = wordObject.currentLetterGuess;
    }
    wordObject.locationArray = [];
    return wordObject;
}
exports.GetResults = function(wordToGuess) {
        if (wordToGuess.wordComplete == true) {
            console.log("Good work.  You win!");
        } else {
            console.log("Sorry.  You loose.  The word is " + wordToGuess.word);
        }

    }
    //    console.log(JSON.stringify(wordObject.screenArray, null, 2));
