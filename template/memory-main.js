function go() {
	var cards = new MemoryCards();
	var cardGame = new MemoryGame(cards);
	var cardGui = new MemoryGui('board', cardGame);

	var button = document.createElement('button');
	button.addEventListener('click', cardGui.reset)
	button.innerHTML = 'reset';
	document.getElementById('board').appendChild(button);
}

window.addEventListener("load",go);
