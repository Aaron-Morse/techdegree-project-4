// Phrase class
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase(); // Sets phrase to all lower case 
    }
    /*
      addPhraseToDisplay method
      - Selects ul nested in #phrase
      - Creates varialbe to be inserted into phraseID
      - Selects the phrase and uses a split to turn the string into an array
      - Conditional determines how to build the li for the phraseHTML var
      - Returns the list of lis and inserst them in the var phraseID
     */
    addPhraseToDisplay() {
        const phraseID = document.querySelector('#phrase ul');
        let phraseHTML = '';
        const phraseArray = this.phrase.split('');
        phraseArray.forEach(char => {
            if (char !== ' ') {
              phraseHTML += (`<li class="hide letter ${char}">${char}</li>`);
            } else {
              phraseHTML += (`<li class="space">${char}</li>`);
            }
            return phraseID.innerHTML = phraseHTML;
          });
    }
    checkLetter(letter) {
      if (this.phrase.indexOf(letter) !== -1) {
        return true;
      }
      return false;
    }
    showMatchedLetter() {
      
    }
}