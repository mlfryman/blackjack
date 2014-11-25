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
      password: Joi.string().min(3).required(),
      createdBy: Joi.string().required(),
      createdAt: Joi.date().max('now')
    }
  },
  handler: function(request, reply){
    var room = new Room(request.payload);
    room.save(function(err){
      reply().code(err ? 401 : 200);
    });
   }
 };
