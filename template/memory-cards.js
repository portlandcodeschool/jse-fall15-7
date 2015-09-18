// See cardset-example.js for examples

var AlphabetCards = (function() {
	// produces pairs 'a'=='A','b'=='B',...
	var alphabet = ' abcdefghijklmnopqrstuvwxyz';

	function Ctor(numPairs) { //numPairs is optional; defaults to 26
		if (numPairs < 1) numPairs = 1;
		if (!numPairs || (numPairs > 26)) numPairs = 26;

		// Generate subset of alphabet in pairs:
		var _values = []; //private array
		while (numPairs) {
			_values.push(alphabet[numPairs]); //'a'...
			_values.push(alphabet[numPairs].toUpperCase());//'A'...
			--numPairs;
		}

		// Instance methods:
		this.values = function() {
			return _values.slice();
		}
		this.match = function(a,b) {
			return a.toUpperCase() == b.toUpperCase();
		}
		this.display = function(val) {
			return val;
		}
	}

	return Ctor;

})();
