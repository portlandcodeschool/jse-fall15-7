var MemoryGUI = (function() {
// render photo back card
  var back = '<img src="../images/cheersBack.jpg" width="150" height="150">';
// function that selects the cell the user click
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
//render the DOM
    this.render = function() {
      container.innerHTML = '';

      var numRows = 4;
      var numCols = 4;

      var tab = document.createElement('table');
      for (var r = 0, id = 0; r < numRows; ++r) {
        var tr = document.createElement('tr');
        tab.appendChild(tr);
        for (var c = 0; c < numCols; ++c, ++id) {
          var td = document.createElement('td');
          td.setAttribute('id', 'cell' + id);
          td.onclick = cellOnClick;
          tr.appendChild(td);

          td.innerHTML = back;
        }
        container.appendChild(tab);
      }
      var resetButton = document.createElement('button');
      resetButton.innerHTML = 'reset';
      resetButton.classList.add('resetButton');
      resetButton.addEventListener('click', function() { console.log('click');
      game.gui().reset()});
      document.getElementById('memorygame').appendChild(resetButton);
    };

    this.render();


    this.reset = function() {
      game.reset();
      game.gui().render();

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
      console.log(whereArr);

      setTimeout(function() {
        whereArr.forEach(function(n) {
          document.getElementById("cell" + n).innerHTML = back;
        });
      }, 1000);
    };

  }

  return GuiCtor;
})();