// make some cards for the game
var MemoryCards = (function() {
    function Ctor() {
        // a list of cards
        var cards = ['kraken', 'squid', 'whale', 'dolphin', 'shark', 'jellyfish',
                    'puffer', 'sunfish', 'eel', 'swordfish', 'tuna', 'urchin'];

        this.values = function() {
            // return a copy of cards, doubled for game
            return cards.concat(cards);
        }

        this.match = function(a,b) {
            // a,b should be names from values
            return (a === b);
        }

        this.display = function(val) {
            return val;
        }
    }
    
    // return constructor
    return Ctor;
})();
