// See cardset-example.js for examples
//Uses example set 2 from cardset-example.js

/// Module 1

var LotrFaceCards = (function() {

	// card values (each card is a pair, array [name,num]) :
	//orig 6, added 6 more
	var faces = [
		['../images/aragorn1.jpg', 'face1', 1],['../images/aragorn1.jpg', 'face1', 2],
		['../images/aragorn2.png', 'face2', 1],['../images/aragorn2.png', 'face2', 2],
		['../images/boromir1.jpg', 'face3', 1],['../images/boromir1.jpg', 'face3', 2],
		['../images/faramir1.jpg', 'face4', 1],['../images/faramir1.jpg', 'face4', 2],
		['../images/faramir2.jpg', 'face4', 1],['../images/faramir2.jpg', 'face4', 2],
		['../images/frodo1.jpg',   'face4', 1],['../images/frodo1.jpg',   'face4', 2],
		['../images/gimli1.jpg',   'face4', 1],['../images/gimli1.jpg',   'face4', 2],
		['../images/legolas1.jpg', 'face3', 1],['../images/legolas1.jpg', 'face3', 2],
		['../images/legolas2.jpg', 'face3', 1],['../images/legolas2.jpg', 'face3', 2],
		['../images/legolas4.jpg', 'face3', 1],['../images/legolas4.jpg', 'face3', 2],
		['../images/pippin1.jpg',  'face4', 1],['../images/pippin1.jpg',  'face4', 2],
		['../images/pippin2.jpg',  'face4', 1],['../images/pippin2.jpg',  'face4', 2]
	];

	function Ctor() {

		/* this.values
		return an array of all the card values in the set. each value could be either an object or a primitive,
		depending on how you choose to implement the cards
		*/
	this.values = function() {
		return faces.slice();
	};

	/* this.match
	(valA, valB): given card values valA and valB
   (both of which should be found in values()), return true if they match as a pair, or false otherwise
			*/
	this.match = function(pair1,pair2) {  //each pair is [name,num]
		return (pair1[0]===pair2[0]); // check if num matches
	};

		/*  this.display
		given card value val, return a string which represents that card.
		if your card values are already strings, this method could merely
		return val, but if your card values are objects, you'll need to
		 generate a string version (e.g. the name() or shortName() of
			 playing-card-objects)
		*/
		this.display = function(val) { //val is pair [name,num]
			return val[0];  //display just the face name
		};
	}

	return Ctor;

})();
