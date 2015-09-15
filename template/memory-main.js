
var cards,game,gui; //global vars can been inspected in console, making debugging easier
function go() {
	// you'll need to study the modules to understand how to plug them in...
	cards = new LotrFaceCards()
	game  = new MemoryGame(cards)
	gui   = new MemoryGUI('memorygame',game); 
}

window.addEventListener("load",go);
