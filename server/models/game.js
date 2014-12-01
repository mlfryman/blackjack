//- IF REFACTORED, would:
//- (1) replace Boolean flags with states
//- (2) call cards "decks"
//- code currently doesn't keep score


'use strict';

var mongoose   = require('mongoose'),
    GameSchema = null,
    Game       = null;

GameSchema = new mongoose.Schema({
  players: [{
    player: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    cards:  {type: mongoose.Schema.Types.ObjectId, ref:'Card'}
  }],
  room:     {type: mongoose.Schema.Types.ObjectId, ref:'Room'},
  player:   {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  card:     {type: mongoose.Schema.Types.ObjectId, ref:'Card'}
  // insert schema here
});

Game = mongoose.model('Game', GameSchema);
module.exports = Game;
