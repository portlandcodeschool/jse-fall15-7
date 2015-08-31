var MemoryCards = (function() {

	var dragons = [
    ['shadow', 1], ['shadow', 2],
    ['horned', 1], ['horned', 2],
    ['black', 1], ['black', 2],
    ['blue', 1], ['blue', 2],
    ['green', 1], ['green', 2],
    ['red', 1], ['red', 2],
    ['white', 1], ['white', 2],
    ['brass', 1], ['brass', 2],
    ['bronze', 1], ['bronze', 2],
    ['copper', 1], ['copper', 2],
    ['gold', 1], ['gold', 2],
    ['silver', 1], ['silver', 2]
  ];

	function CardsCtor() {
		this.values = function() {
			return dragons.slice();
		};
		this.match = function(card1,card2) {
			return card1[0] === card2[0];
		};
		this.display = function(val) {
			return val;
		};
	}

	return CardsCtor;
})();
