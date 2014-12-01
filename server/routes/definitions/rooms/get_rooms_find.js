'use strict';

var Joi  = require('joi'),
    Room = require('../../../models/room');

module.exports = {
  description: 'Find a Room',
  notes: 'Should find a Room',
  tags:['rooms'],
  validate: {
    params: {
      roomId: Joi.string().regex(/^[a-f0-9]{24}$/).required()
    }
  },
  handler: function(request, reply){
    //- findOne is more efficient than find
    Room.findOne({_id:request.params.roomId}).populate('createdBy').exec(function(err, room){
      room.password = room.createdBy.password = null;
      reply(room);
    });
  }
};
