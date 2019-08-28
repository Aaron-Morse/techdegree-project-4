// Game class with appropriate constructors 
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [{ // Array of phrase objects
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
        this.activePhrase = null;
    }
    /*
    getRandomPhrase method 
    - creates a random number to be used as the index value for the array of objects
    */
    getRandomPhrase() {
        const i = Math.floor(Math.random() * this.phrases.length);
        const phrase = this.phrases[i];
        return phrase;
    }
    /* 
    startGame method
    - Selects overlay div by id and sets display to none
    - Selects phrase from getRandomPhrase method
    - Instantiate new phrase class with randomPhrase
    - Uses the addPhraseToDisplay method for new phrase variable
    - Sets active phrase to randomPhrase
    */
    startGame() {
        const overlayDiv = document.getElementById('overlay');
        overlayDiv.style.display = 'none';
        const randomPhrase = this.getRandomPhrase();
        const phrase = new Phrase(randomPhrase.phrase);
        phrase.addPhraseToDisplay();
        this.activePhrase = randomPhrase;
    }
    handleInteraction() {
    }
}