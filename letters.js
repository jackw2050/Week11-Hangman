exports.setScreenArray = function(wordObject) {
    console.log("Array length = " + wordObject.locationArray.length);
    if (wordObject.locationArray.length > 0) {
        return ReplaceLetters(wordObject);
    } else {
        console.log("letter not found");
        return wordObject;
    }

}

function ReplaceLetters(wordObject) {
    for (var index = 0; index < wordObject.locationArray.length; index++) {
        wordObject.screenArray[wordObject.locationArray[index]] = wordObject.currentLetterGuess;
    }
    console.log(JSON.stringify(wordObject.screenArray, null, 2));
    return wordObject;
}
