// make some cards for the game
var MemoryCards = (function() {
    function Ctor() {
        // a list of cards
        var cards = ['kraken', 'squid', 'whale', 'octopus', 'shark', 'jellyfish',
                    'narwhal', 'serpent', 'cthulhu', 'diver', 'dino', 'anchor'];

        this.values = function() {
            // return a copy of cards, doubled for game
            return cards.concat(cards);
        }

        this.match = function(a,b) {
            // a,b should be names from values
            return (a === b);
        }

        this.display = function(val) {
            // return an img tag for card front
            return '<img src="images/' + val + '.jpg" width="113" height="168">';
        }
    }
    
    // return constructor
    return Ctor;
})();
