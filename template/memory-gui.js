var MemoryGUI = (function () {

	//...

	function GuiCtor(container,game) {
		game.gui(this); // link game to this gui

		if (typeof container === 'string') {
        container = document.getElementById(container);
	    }

	    this.el = function() {
	        return container;
	    }

	    var gameSize = game.size();

		container.innerHTML = "";

		var clickHandler = function(){
			var cellId = this.getAttribute('id');
			var cellNum = cellId.slice(4,6);
			var idNum = parseInt(cellNum);
			game.lift(idNum);

		}

		for (var i = 0; i<gameSize; i++){
			var cell = document.createElement('div');
			container.appendChild(cell);
			cell.setAttribute('id', 'cell'+i);
			cell.classList.add('allCells','face_down');
			cell.onclick = clickHandler;
		}





		// var Cell = (function(){
		// 	function CellCtor(gameSize){
		// 		this.cell = document.createElement('div');
		// 		this.attach = container.appendChild(cell);
		// 		this.id = function(){
		// 			for(var i = 0; i<gameSize; i++){
		// 				cell.setAttribute('id', 'cell'+i);
		// 			}
		// 		}
		// 		this.cssClass = cell.classList.add('allCells');
		// 		this.click = cell.onclick(game.lift());

		// 	}
		// })();



		// public instance methods
		// (you may instead attach these to a prototype if you prefer)


		this.reset = function() {
			container.childNodes.classList.remove('face_up');
			container.childNodes.classList.add('face_down');
		}
		this.show = function(where,displayString) {
			//console.log(game.faceupValue(where));
			var whereValId = document.getElementById('cell'+where);
			whereValId.classList.add('face_up');
			whereValId.innerHTML = displayString;
			return (game.faceupValue(where));

		}
		this.removeSoon = function(whereArr) {
			var arrVal1 = whereArr[0];
			var arrVal2 = whereArr[1];
			var cellId1 = document.getElementById('cell'+arrVal1);
			var cellId2 = document.getElementById('cell'+arrVal2);

			function classChange(){
				cellId1.classList.add('matched');
				cellId2.classList.add('matched');
			}
			var tID = window.setTimeout(classChange, 1000);

		}

		this.hideSoon = function(whereArr) {
			var arrVal3 = whereArr[0];
			var arrVal4 = whereArr[1];
			var cellId3 = document.getElementById('cell'+arrVal3);
			var cellId4 = document.getElementById('cell'+arrVal4);

			function classChange2(){
				cellId3.classList.remove('face_up');
				cellId3.classList.add('face_down');
				cellId4.classList.remove('face_up');
				cellId4.classList.add('face_down');
			}

			var tID = window.setTimeout(classChange2, 1000);
		}

		// Do some initial setup and rendering...
	}

	return GuiCtor;
})();
