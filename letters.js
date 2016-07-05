exports.setScreenArray = function(wordObject) {
 //   console.log("Array length = " + wordObject.locationArray.length);
    if (wordObject.locationArray.length > 0) {
        return ReplaceLetters(wordObject);
    } else {
    	wordObject.guessCounter --;
        console.log("letter not found.  " + wordObject.guessCounter + " more mistakes allowed");
        return wordObject;
    }
}


function ReplaceLetters(wordObject) {
    for (var index = 0; index < wordObject.locationArray.length; index++) {
        wordObject.screenArray[wordObject.locationArray[index]] = wordObject.currentLetterGuess;
    }
    wordObject.locationArray = [];
    return wordObject;
}
exports.GetResults = function(wordToGuess){
	if (wordToGuess.wordComplete == true) {
		console.log("Good work.  You win!");
	}
	else{
		console.log("Sorry.  You loose.  The word is " + wordToGuess.word);
	}

}
//    console.log(JSON.stringify(wordObject.screenArray, null, 2));
