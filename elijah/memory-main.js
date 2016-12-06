
var cards,game,gui;
function go() {
    cards = new MemoryCards();
    game  = new MemoryGame(cards);
    gui   = new MemoryGUI('memorygame',game);

    // create reset button
    var button = document.createElement('button');
    button.innerHTML = 'Reset';
    button.addEventListener('click', gui.reset);
    document.getElementById('memorygame').appendChild(button);
}

window.addEventListener("load",go);
