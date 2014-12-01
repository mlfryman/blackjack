//- IF REFACTORED, would:
//- (1) replace Boolean flags with states
//- (2) call cards "decks"

'use strict';

var mongoose   = require('mongoose'),
    GameSchema = null,
    Game       = null;

GameSchema = new mongoose.Schema({
  // insert schema here
});

Game = mongoose.model('Game', GameSchema);
module.exports = Game;
