let game;

const endGameDiv = document.getElementById('overlay');
const startButton = document.getElementById('btn__reset');
const gameOverMsg = document.getElementById('game-over-message');
const qwerty = document.getElementById('qwerty');
const keyboard = qwerty.querySelectorAll('.key');
const hearts = document.querySelectorAll('.tries img');

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
        keyboard.forEach(key => key.classList.remove('chosen', 'wrong'));
        hearts.forEach(heart => heart.src='images/liveHeart.png');
        game = new Game();
        return game.startGame();
    }
});


qwerty.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
});



