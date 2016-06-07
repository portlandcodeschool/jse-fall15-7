// See cardset-example.js for examples

var MemoryCards = (function() {

	// card values (each card is a pair, array [name,num]) :
	var animals = [	['dog',1],['woofwoof!',1],
					['cat',2],['meowww',2],
					['frog',3],['ribbit',3],
					['horse',4],['neigh!!',4],
					['pig',5],['oink oink',5],
					['cow',6],['mmmooooo!',6],
					['donkey',7],['yeehaawww!',7],
					['duck',8],['quackkk',8]  ];

	function Ctor() {
		this.values = function() {
			return animals.slice();
		};
		this.match = function(pair1,pair2) {  //each pair is [name,num]
			return (pair1[1]===pair2[1]); // check if num matches
		};
		this.display = function(val) { //val is pair [name,num]
			return val[0];  //display just the animal name
		};
	}

	return Ctor;

})();
