let game;
const startButton = document.getElementById('btn__reset');

startButton.addEventListener('click', () => {
    game = new Game();
    return game.startGame();
});

// Selects the onscreen keyboard elements
const qwerty = document.getElementById('qwerty');

// Event listner for clicks onscreen keyboard
qwerty.addEventListener('click', (event) => {
    const letter = event.target.textContent;s
  //  game.handleInteraction(letter);
    
});



