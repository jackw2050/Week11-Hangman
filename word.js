//word.js should contain all of the methods which will check the letters guessed versus the random word selected.

exports.AlphabetArrayUpdate = function(wordObject) {
    let letterPosition = wordObject.alphabet.indexOf(wordObject.currentLetterGuess.toUpperCase());
    wordObject.alphabet[letterPosition] = " ";
    return wordObject;
}


exports.CheckRepeatLetterGuess = function(wordObject) {
    var letterIndex = FindIndex(wordObject);
    if (letter) { // if letter has already been used return  false
        return false;
    } else {
        wordObject.lettersUsed.push(wordObject);
    }
}

exports.CheckArrayForLetter = function(wordObject) {
    for (var arrCtr = 0; arrCtr < wordObject.wordArray.length; arrCtr++) {
        if (wordObject.wordArray[arrCtr] == wordObject.currentLetterGuess) {
            wordObject.locationArray.push(arrCtr);
        }
    }
    return wordObject;
    //   console.log(JSON.stringify(wordObject.locationArray, null, 2));
}

function FindIndex(wordObject) {
    return wordObject.lettersUsed == wordObject.currentLetterGuess;
}

exports.CheckForSuccess = function(wordObject) {
    if (wordObject.screenArray.indexOf("_") < 0) {
        wordObject.wordComplete = true;
    } else {
        wordObject.wordComplete = false;
    }
    return wordObject;
}

//exports.CheckArrayForLetter = MakeLetterLocationArray(arrayToCheck, letter);
