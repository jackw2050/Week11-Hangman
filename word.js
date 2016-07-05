//word.js should contain all of the methods which will check the letters guessed versus the random word selected.


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
	//console.log("in success function");
    if (wordObject.screenArray == wordObject.wordArray) {
        wordObject.wordComplete = true;
    } else {
        wordObject.wordComplete = false;
    }
    return wordObject;
}

//exports.CheckArrayForLetter = MakeLetterLocationArray(arrayToCheck, letter);



/*
function CheckArrayForLetters(arrayToCheck, letter) {
    console.log("checking letter exists");
    if (typeof(arrayToCheck == letter) == 'undefined') {
        return false;
    } else {
        return true;
    }
}

exports.wCheckArrayForLetter = function(arrayToCheck, letter) {
    var locationArray = [];
    console.log("creating location array");
    if (CheckArrayForLetter(arrayToCheck, letter) == true) {

        for (var arrCtr = 0; arrCtr < arrayToCheck.length; arrCtr++) {
            if (arrayToCheck[arrCtr] === letter) {
                locationArray.push(arrCtr);
            }
        }
        return locationArray;
    } else {
        return locationArray;
    }

}
*/
