/// Module 3

var MemoryGUI = (function () {

	function GuiCtor(container,game) {
		game.gui(this);


	this.reset = function() {
		var images = document.getElementsByTagName('img')
		for (i=0; i<images.length; ++i) {
			images[i].setAttribute('src', '../images/bgpic2.jpg');
		}
		game.reset();
	}

// if all card slots are ' ' then render?

// 3 rending methods for the GUI instance, one for each of the 3 states

	//
	this.hideSoon = function(whereArr) {
		window.setTimeout(function () {
			$( '#' + whereArr[0] + ' img').attr('src', '../images/bgpic2.jpg')
			$( '#' + whereArr[1] + ' img').attr('src', '../images/bgpic2.jpg')
		}, 750);
	}


	//
	this.show = function(where,displayString) {
		document.getElementById(where).getElementsByTagName('img')[0].setAttribute('src', displayString);
	}


	//
	this.removeSoon = function(whereArr) {
		window.setTimeout(function () {
			$( '#' + whereArr[0] + ' img').fadeOut(200)
			$( '#' + whereArr[1] + ' img').fadeOut(200)
		}, 500);
	}



	this.render = function() {
			var tab = document.createElement('table');
			var cellNum = 0;
			for (var r=0, id=0; r<game.size()/6; ++r) {
							var tr = document.createElement('tr');
							tab.appendChild(tr); //
							for (var c=0; c<6; ++c, ++id) {
										var td = document.createElement('td');
										var faceImg = document.createElement('img');
										faceImg.setAttribute('src', '../images/bgpic2.jpg')
										td.setAttribute('id', cellNum);
										td.classList.add('facedown');
										td.addEventListener("click", function() {
											var id = this.getAttribute('id')
											game.lift(parseInt(id))
												console.log(this.id + ' selected');
										});
										td.appendChild(faceImg);
										tr.appendChild(td);


										cellNum++;
							}
			}

			console.log('cards rendered');
			var board = document.getElementById(container)
			board.appendChild(tab);
			document.getElementById("myBtn").addEventListener("click", this.reset);
	}
	this.render();
	};

	return GuiCtor;
})();
