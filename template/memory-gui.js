var MemoryGUI = (function() {

  var cellOnClick = function() {
    var cellID = this.getAttribute('id');
    var cellNum = cellID.slice(4, 6);
    var idNum = parseInt(cellNum);
    game.lift(idNum);
    console.log(idNum);
  };

  function GuiCtor(container, game) {
    game.gui(this); // link game to this gui
    if (typeof container === 'string') {
      container = document.getElementById(container);
    }

    this.el = function() {
      return document.getElementById(container);
    };

    this.render = function() {
      container.innerHTML = '';
    };

    var numRows = 2;
    var numCols = 7;

    var tab = document.createElement('table');
    for (var r = 0, id = 0; r < numRows; ++r) {
      var tr = document.createElement('tr');
      tab.appendChild(tr);
      for (var c = 0; c < numCols; ++c, ++id) {
        var td = document.createElement('td');
        td.setAttribute('id', 'cell' + id);
        td.onclick = cellOnClick;
        tr.appendChild(td);
      }
      container.appendChild(tab);
    }

    var back = '<img src="SevenWondersOfTheWorld.png" width="144" height="200">';
    // public instance methods
    // (you may instead attach these to a prototype if you prefer)
    this.reset = function() {
      game.reset();
      var tds = document.getElementsByTagName('td');
      for (var i = 0; i < tds.length; i++) {
        tds[i].innerHTML = back;
      }

      // cellID.classList.add('reset');
      // cellID.classList.remove('td');

    };

    this.show = function(where, displayString) {
      console.log((game.faceupValue(where)));
      var whereVal = document.getElementById("cell" + where);
      whereVal.classList.add('face-up');
      whereVal.innerHTML = displayString;
      return (game.faceupValue(where));

      //...
    };
    this.removeSoon = function(whereArr) {
      setTimeout(function() {
        whereArr.forEach(function(n) {
          var card = document.getElementById("cell" + n);
          card.innerHTML = '';
          card.setAttribute('class', 'matched');
        });
      }, 1000);
    };

    this.hideSoon = function(whereArr) {
      //create class to change color
      console.log(whereArr);

      setTimeout(function() {
        whereArr.forEach(function(n) {
          document.getElementById("cell" + n).innerHTML = back;
        });
      }, 1000);
    };

    // Do some initial setup and rendering...
  }

  return GuiCtor;
})();
