var MemoryGui = (function() {

  function GuiCtor(container, game) {
    game.gui(this);

//Make sure container is an HTML element, and convert it to one if not

    if (typeof container === "string") {
      container = document.getElementById(container);
    }

//Various variables necessary for the constructor methods
    var gridSize = game.size();

    var numRows = Math.floor(Math.sqrt(gridSize));

    var cardsPerRow = Math.floor(gridSize / numRows);

    var grid = document.createElement('table');
    container.appendChild(grid);

    var idCounter = 0; //Intialize counter for assigning unique IDs to cards


//Instance methods

    this.show = function(where, displayString) {
      var elem = document.getElementById(where);
      elem.setAttribute('class', 'face-up');
      elem.innerHTML = "<p class = 'cardText'>" + displayString + "</p>";
    // This ^ doesn't work, but I already created the text in my rendering code below
    };

    this.hideSoon = function(whereArray) {
      function hide(val) {
        document.getElementById(val).setAttribute('class', 'face-down');
      };
      function hideAll() {
        whereArray.forEach(hide);
      };
        var timer = window.setTimeout(hideAll, 500);
    };

    this.removeSoon = function(whereArray) {
      //Need a callback for Array.forEach()
      function remove(val) {
        document.getElementById(val).setAttribute('class', 'matched');
      };
      function removeAll() {
        whereArray.forEach(remove);
      }
      var timer = window.setTimeout(removeAll, 500);
    };

    this.reset = function() {
      $('td').css('class', 'face-down');
      game.reset();
    };





//Render the table:
    this.render = function() {
      for (var i = 0; i<numRows; i++) {
      var tempRow = document.createElement('tr');
      board.appendChild(tempRow);
        for(var j = 0; j<cardsPerRow; j++) {
          var tempCard = document.createElement('td');
          tempCard.setAttribute('id', idCounter);   //Give it a unique ID
          tempCard.setAttribute('class', 'face-down');     //Make each face-down

          tempCard.innerHTML = '<p class = "cardText">A</p>';

          tempRow.appendChild(tempCard);
          idCounter++;
        }
      }
    };

    this.render();

      //Instance methods

      //Click events:

      /*$('td').click(function() {      // A function to make sure clicking is working
        console.log('hello, I am card # ' + this.getAttribute('id'));
      }); */

       //The click (it could be in plain JS too) MUST GO here
          // because the IIFE runs way too early for it to work outside
          //the constructor. That's because the IIFE runs as soon as the
          //file is mentioned, but the constructor isn't called that early
          //The memory-main.js file delays the execution of the constructors
          //until the document has loaded!
          //And you CAN'T INTERACT WITH THE ELEMENTS BEFORE THEY'RE CREATED!!!

      //Click event to trigger game.lift()

      $('td').click(function(){     //Works when game is the DummyGame.js module
        game.lift( parseInt(this.getAttribute('id') ) );
      });

      $("#reset").click(function(){
        gui.reset();
        console.log('Clicked reset')
      });

  }; //End Ctor



return GuiCtor;
})();             //End IIFE
