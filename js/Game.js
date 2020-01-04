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
        this.activePhrase = phrase;
    }
    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {
        let hideCount = 0;
        document.querySelectorAll('#phrase li')
        .forEach(li => {
            if (li.classList.contains('hide')) {
                hideCount += 1;
            }
        });
        if (hideCount > 0) {
            return false
        } 
        return true;
    }
    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        const hearts = document.querySelectorAll('#scoreboard img');
        hearts[this.missed].src='images/lostSkull.png';
        this.missed ++;
        if (this.missed === 5) {
            this.gameOver(false);
        }
    };
    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const header = document.getElementById('game-over-message');
        if (gameWon === true) {
            endGameDiv.style.display = '';
            endGameDiv.style.backgroundColor = 'lightgreen';
            header.innerText = 'Winner, winner chicken dinner!';
        }
        if (gameWon === false) {
            endGameDiv.style.display = '';
            endGameDiv.style.backgroundColor = 'lightsalmon';
            header.innerText = 'Try again next time, homie!';
        }
    };
    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(letter) {
    if (this.activePhrase.checkLetter(letter)) {
        onScreenKeys.forEach(key => {
            if (key.innerText === letter) {
                key.classList.add('chosen');
            }
        });
        this.activePhrase.showMatchedLetter(letter);
        if (this.checkForWin()) {
            this.gameOver(true);
        }
    } else {
        onScreenKeys.forEach(key => {
            if (key.innerText === letter) {
                key.classList.add('wrong');
            }
        });
        this.removeLife();
        }
    }

}