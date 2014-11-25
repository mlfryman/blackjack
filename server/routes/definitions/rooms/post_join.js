'use strict';

var Joi  = require('joi'),
    Room = require('../../../models/room');

module.exports = {
  description: 'Join a Room',
  notes: 'Should authorize a user to join a Room',
  tags:['rooms'],
  validate: {
    payload: {
      name: Joi.string().min(3).max(12).required(),
      password: Joi.string().min(3).required()
    }
  },
  auth: {
    mode: 'try'
  },
  handler: function(request, reply){
    Room.login(request.payload, function(room){
      if(room){
        room.password = null;
        reply(room);
      }else {
        reply().code(401);
      }
    });
  }
};
