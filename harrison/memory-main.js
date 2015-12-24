var cards,game,gui; //global vars can been inspected in console, making debugging easier
function go() {
	// you'll need to study the modules to understand how to plug them in...
	cards = new RussEng();
	game  = new MemoryGame(cards);
	gui   = new MemoryGui('board',game); //'memorygame' is the id of div where gui should be inserted'
}

window.addEventListener("load",go);
