// Game class with appropriate constructors 
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        return [{
            phrase: 'you talking to me'    
        },
        {
            phrase: 'show me the money'
        },
        {
            phrase: 'i see dead people'
        },
        {
            phrase: 'houston we have a problem'
        },
        {
            phrase: 'nobody puts baby in a corner'
        }];
    }
    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const i = Math.floor(Math.random() * this.phrases.length);
        const phrase = this.phrases[i];
        return phrase;
    }
    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        const overlayDiv = document.getElementById('overlay');
        overlayDiv.style.display = 'none';
        const randomPhrase = this.getRandomPhrase();
        const phrase = new Phrase(randomPhrase.phrase);
        phrase.addPhraseToDisplay();
        this.activePhrase = randomPhrase;
    }
    handleInteraction(param) {
        checkLetter(param);
    }
}