var MemoryGUI = (function () {
    function GuiCtor(container,game) {
        game.gui(this);
        // XXX no validation
        var container = document.getElementById('memorygame');
        // score counter
        var score = 0;
        // methods
        this.reset = function() {
            // reset cards
            game.reset();
            // grab the tds and reset the background
            var tds = document.getElementsByTagName('td');
            for (var i = 0; i < tds.length; i++) {
                tds[i].setAttribute('class', 'green');
                // 'erase' the image if reset is pressed to quickly
                tds[i].innerHTML = '';
            }
            // reset score counter
            score = 0;
        }
        this.show = function(where,displayString) {
            // attach the value to the container `where`
            document.getElementById(where).innerHTML = displayString;
        }
        this.removeSoon = function(whereArr) {
            // remove cards after a short timeout
            setTimeout(function() {
                whereArr.forEach(function(n) {
                    var card = document.getElementById(n);
                    card.innerHTML = '';
                    card.setAttribute('class', 'white');
                });
            }, 1000);
        }
        this.hideSoon = function(whereArr) {
            // hide after short timeout
             setTimeout(function() {
                whereArr.forEach(function(n) {
                    document.getElementById(n).innerHTML = '';
                });
            }, 1000);
        }

        // Do some initial setup and rendering...
        var sqId = 0;
        var tb = document.createElement('table');
        for (i = 0; i < (game.size())/6; i++) {
            var row = tb.insertRow(i);
            for (c = 0; c < 6; c++) {
                var newCell = row.insertCell(c);
                newCell.setAttribute('id', (sqId));
                newCell.addEventListener('click', function(event) {
                    var id = this.getAttribute('id');
                    game.lift(parseInt(id));
                });
                sqId++;
            }
        }
        tb.addEventListener('click', function(event) {
            // increment score counter
            document.getElementById('score').innerHTML = 'Click count: ' + (score += 1);
        });
        container.appendChild(tb);
    }
    // return constructor
    return GuiCtor;
})();
