var MemoryGui = (function () {

	//...

	function GuiCtor(container,game) {
		game.gui(this);

		this.reset = function() {
			game.reset();
			var tds = document.getElementsByTagName('td');
			for (var i = 0; i < tds.length; i++) {
				tds[i].setAttribute('class', 'grey');
				tds[i].innerHTML = '';
			}
		}
		this.show = function(where,displayString) {
			document.getElementById(where).innerHTML = displayString[0];
		}
		this.removeSoon = function(whereArr) {
			setTimeout(function() {
				whereArr.forEach(function(n) {
					var card = document.getElementById(n)
					card.innerHTML = '';
					card.setAttribute('class','white');
				})
			},500)
		}
		this.hideSoon = function(whereArr) {
			setTimeout(function() {
				whereArr.forEach(function(n) {
					document.getElementById(n).innerHTML = '';
				})
			},500)
		}

		var container = document.getElementById(container);
		var grid = document.createElement('table');
		var cellId = 0;
		for (var r = 0; r < game.size()/4; r++) {
			var row = grid.insertRow(r)
			for (var c = 0; c < 4; c++) {
				var cell = row.insertCell(c);
				cell.addEventListener('click', function(event) {
					var id = this.getAttribute('id');
					game.lift(parseInt(id));
				})
				cell.setAttribute('id', cellId);
				cellId++;
			}
		}
		container.appendChild(grid);

	}

	return GuiCtor;
})();
