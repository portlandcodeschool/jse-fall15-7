// See cardset-example.js for examples
				
var MemoryCards = (function() {
var quotes = [	['People can do amazing things when they believe in themselves.',1],['Dr. Quinn Medicine Woman',1],
				['Let\'s go be bad guys!',2],['Firefly',2],
				['Step with care and great tact, and remember that Life\'s a Great Balancing Act.',3],['Dr. Seuss',3],
				['Half of writing history is hiding the truth.',4],['Serenity',4],
				['Have... a good time... all the time.',5],['Spinal Tap',5],
				['So the fate... of the entire human race depends upon my wild guess.',6],['Battlestar Galactica',6] ];
	function Ctor() {
		//...
		this.values = function() {
			return quotes.slice();
		};

		this.match = function(a,b) {
			return (a[1]===b[1]);
		};

		this.display = function(val) {
			return val[0];
		};
	}
	//...

	return Ctor;
})();

