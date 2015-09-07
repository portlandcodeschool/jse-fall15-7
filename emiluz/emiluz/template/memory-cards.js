// See cardset-example.js for examples

var MemoryCards = (function() {
	// card values:
 var glass = [
    ['<img src="../images/goblet.jpg" width="150" height="150">', 1],
    ['<img src="../images/goblet.jpg" width="150" height="150">', 1],
    ['<img src="../images/mug.jpg" width="150" height="150">', 2],
    ['<img src="../images/mug.jpg" width="150" height="150">', 2],
    ['<img src="../images/pilsner.jpg" width="150" height="150">', 3],
    ['<img src="../images/pilsner.jpg" width="150" height="150">', 3],
  	['<img src="../images/pint.jpg" width="150" height="150">', 4],
    ['<img src="../images/pint.jpg" width="150" height="150">', 4],
    ['<img src="../images/sampler.jpg" width="150" height="150">', 5],
    ['<img src="../images/sampler.jpg" width="150" height="150">', 5],
    ['<img src="../images/snifter.jpg" width="150" height="150">', 6],
    ['<img src="../images/snifter.jpg" width="150" height="150">', 6],
    ['<img src="../images/stange.jpg" width="150" height="150">', 7],
    ['<img src="../images/stange.jpg" width="150" height="150">', 7],
    ['<img src="../images/weizen.jpg" width="150" height="150">', 8],
    ['<img src="../images/weizen.jpg" width="150" height="150">', 8],
  ];

  function Ctor() {

    this.values = function() {
      return glass.slice();
    };

    this.match = function(pair1, pair2) {
      return (pair1[1] === pair2[1]);
    };

    this.display = function(val) {
      return val[0];
    };
  }

  return Ctor;
})();