let game;
const button = document.getElementById('btn__reset');

button.addEventListener('click', () => {
    game = new Game();
    return game.startGame();
});



