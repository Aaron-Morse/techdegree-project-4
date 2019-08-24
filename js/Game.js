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
    // getRandomPhrase method creates a random number to be used as the index value for the array of objects
    getRandomPhrase() {
        const i = Math.floor(Math.random() * this.phrases.length);
        const phrase = this.phrases[i];
        return phrase;
    }
    startGame() { // startGame method
        const overlayDiv = document.getElementById('overlay'); // Selects overlay div by id and sets display to none
        overlayDiv.style.display = 'none';
        const randomPhrase = this.getRandomPhrase(); // Grabs random phrase from phrase class
        const phrase = new Phrase(randomPhrase.phrase); // Instantiate new phrase class with random phrase
        phrase.addPhraseToDisplay(); // Uses the addPhraseToDisplay method for new phrase var
        this.activePhrase = randomPhrase; // Finally, sets active phrase
    }
}