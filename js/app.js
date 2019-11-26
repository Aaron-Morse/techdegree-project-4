// Globally scoped variables used throughouts
let game;
const endGameDiv = document.getElementById('overlay');
const startButton = document.getElementById('btn__reset');
const gameOverMsg = document.getElementById('game-over-message');
const qwerty = document.getElementById('qwerty');
const onScreenKeys = qwerty.querySelectorAll('.key');
const hearts = document.querySelectorAll('.tries img');

// Event listener for start button with logic to determine how to load new game
startButton.addEventListener('click', () => {
    if (gameOverMsg.innerText === '') {
        game = new Game();
        return game.startGame();
    } else {
        endGameDiv.style = '';
        gameOverMsg.innerText = '';
        const newList = document.createElement('UL');
        const oldList = document.querySelector('#phrase ul');
        document.getElementById('phrase').replaceChild(newList, oldList);
        onScreenKeys.forEach(key => key.classList.remove('chosen', 'wrong'));
        hearts.forEach(heart => heart.src='images/liveHeart.png');
        game = new Game();
        return game.startGame();
    }
});

// Event listener for onscreen keyboard buttons
qwerty.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target.innerText);
    }
});

// Event listern for keyboard keydowns
document.addEventListener('keydown', e => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        game.handleInteraction(e.key);
    }   
});




