let game;
const button = document.getElementById('btn__reset');

button.addEventListener('click', () => {
    game = new Game();
    return game.startGame();
});

// Selects the onscreen keyboard elements
const qwerty = document.getElementById('qwerty');

// Event listner for clicks onscreen keyboard
qwerty.addEventListener('click', (event) => {
    let letter = event.target.textContent;
});



