//- create 1 card with it's properties
//- imported json file with card info
//- code currently doesn't score

'use strict';

var mongoose   = require('mongoose'),
    CardSchema = null,
    Card       = null;

CardSchema = new mongoose.Schema({
  // insert schema here
});

Card = mongoose.model('Card', CardSchema);
module.exports = Card;
