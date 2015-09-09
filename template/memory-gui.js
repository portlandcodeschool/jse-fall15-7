var MemoryGUI = (function () {

	//...

	function GuiCtor(container,game) {
		function unFlip (number) {
			var cardToHide = document.getElementById(number);
			cardToHide.innerHTML = '';
			cardToHide.setAttribute('class', '');
		};

		function matched (number) {
			var matched = document.getElementById(number) 
			matched.innerHTML = '';
			matched.setAttribute('class', 'matched');
		}

		game.gui(this); // link game to this gui
		//...
		var game = game;
		// public instance methods
		// (you may instead attach these to a prototype if you prefer)
		this.reset = function() {
			//...
			game.reset();
		}
		this.show = function(where,displayString) {
			//...
			var cardToLift = document.getElementById(where);
			cardToLift.innerHTML = displayString;
			cardToLift.setAttribute('class', 'visible');
		}
		this.removeSoon = function(whereArr) {
			//...
			window.setTimeout(function() {
				whereArr.forEach(matched);
			}, 1000);
		}
		this.hideSoon = function(whereArr) {
			//...
			window.setTimeout(function() {
				whereArr.forEach(unFlip);
			}, 1000);
		}

		// Do some initial setup and rendering...
	    // this.render = function() {
    	    var numRows = 3;
		    var numCols = 4;
		    if (typeof container === 'string') {
		        container = document.getElementById(container);
		    }

	        container.innerHTML = '';
	        
	        var tab = document.createElement('table');

	        for (var r=0, id=0; r<numRows; ++r) {
	            var tr = document.createElement('tr');
	            tab.appendChild(tr);
	            for (var c=0; c<numCols; ++c, ++id) {
	                var td = document.createElement('td');
	                td.setAttribute('id',id);
	                tr.appendChild(td);
	                td.onclick = function () {
	                	var cardNumber = parseInt(this.id);
	                	game.lift(cardNumber);
	                	console.log(cardNumber);
	                	console.log(this);

	                }
	            }
	        }
	        container.appendChild(tab);
	    // }
	}

	return GuiCtor;
})();




