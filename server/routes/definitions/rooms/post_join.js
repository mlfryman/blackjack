'use strict';

var Joi  = require('joi'),
    // bcrypt = require('bcrypt'),
    Room = require('../../../models/room');

module.exports = {
  description: 'Join a Room',
  notes: 'Should a join an existing room',
  tags:['rooms'],
  validate: {
    payload: {
      password: Joi.string().min(1).required()
    },
    params: {
      name: Joi.string().min(3).max(12).required()
    }
  },
  handler: function(request, reply){
    Room.decrypt({name: request.params.name, password: request.payload.password}, function(id){
      reply({roomId: id}).code(id ? 200 : 400);
    });
  }
};
