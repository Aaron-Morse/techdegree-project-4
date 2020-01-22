// Phrase class
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase(); // Sets phrase to all lower case 
    }
    /**
    * Display phrase on game board
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
    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */
    checkLetter(letter) {
      return game.activePhrase.phrase.indexOf(letter) !== -1;
    }
    /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - letter to display
     */
    showMatchedLetter(letter) {
      document.querySelectorAll('#phrase li')
      .forEach(li => {
        if (li.classList.contains(letter)) {
          li.classList.remove('hide');
          li.classList.add('show');
        }
      });
    }
}