var MemoryCards = (function() {
  var SevenWonders = [
    ['Porcelain Tower of Nanjing', 1],
    ['Nanjing, China', 1],
    ['The Colosseum', 2],
    ['Rome, Italy', 2],
    ['The Great Wall of China', 3],
    ['China', 3],
    ['Stonehenge', 4],
    ['Wiltshire, England', 4],
    ['Hagia Sophia', 5],
    ['Istanbul,Turkey', 5],
    ['Leaning Tower of Pisa', 6],
    ['Pisa, Italy', 6],
    ['Catacombs of Kom el Shoqafa', 7],
    ['Alexandria, Egypt', 7]
  ];

  function Ctor() {

    this.values = function() {
      return SevenWonders.slice();
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
