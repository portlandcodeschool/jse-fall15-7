var MemoryGUI = (function () {

	//...

	function GuiCtor(container,game) {
		game.gui(this); // link game to this gui

		//...

		// public instance methods
		// (you may instead attach these to a prototype if you prefer)
		this.reset = function() {
			//...
		}
		this.show = function(where,displayString) {
			//...
		}
		this.removeSoon = function(whereArr) {
			//...
		}
		this.hideSoon = function(whereArr) {
			//...
		}

		// Do some initial setup and rendering...
	}

	return GuiCtor;
})();
