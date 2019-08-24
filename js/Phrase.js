class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay() {
        const phraseID = document.querySelector('#phrase ul');
        let phraseHTML = '';
        this.phrase.split('').forEach(char => {
            if (char !== ' ') {
              phraseHTML += (`<li class="hide letter ${char}">${char}</li>`);
            } else {
              phraseHTML += (`<li class="space">${char}</li>`);
            }
            return phraseID.innerHTML = phraseHTML;
          });
    }
}