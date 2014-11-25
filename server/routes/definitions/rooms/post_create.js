'use strict';

var Joi  = require('joi'),
    Room = require('../../../models/room');

module.exports = {
  description: 'Create a Room',
  notes: 'Should a new Room',
  tags:['rooms'],
  validate: {
    payload: {
      name: Joi.string().min(3).max(12).required(),
      password: Joi.string().min(1).required()
    }
  },
  handler: function(request, reply){
    request.payload.createdBy = request.auth.credentials._id;
    var room = new Room(request.payload);
    console.log('Create Room: ', room);
    room.encrypt();
    console.log('Encrypt password: ', room);
    room.save(function(err){
      reply({name:room.name, avatar:request.auth.credentials.avatar, createdAt:room.createdAt}).code(err ? 401 : 200);
    });
  }
};
