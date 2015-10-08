describe('Game', function (){
  var game;

  beforeEach(function(){
    game = new Game;
  });

  describe('Initializing', function(){
    it('initiated with a frames hash of length 10', function(){
      expect(Object.keys(game.frames).length).toBe(10)
    });

    it('initiated with a total score of 0', function(){
      expect(game.totalScore).toBe(0)
    });

    it('initiated on the first frame', function(){
      expect(game.frame).toBe(1)
    })
  });

  describe('#updateScore', function(){

    player = {downedPins: function() {
                return 8 }
             };

    it('updates score based on players downed pins', function(){
      game.updateScore(player);
      expect(game.totalScore).toBe(8)
    });
  });
});
