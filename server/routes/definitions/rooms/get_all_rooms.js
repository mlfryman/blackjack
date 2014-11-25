'use strict';

var Room = require('../../../models/room');

module.exports = {
  description: 'Get all rooms',
  notes: 'Should return all rooms with a GET',
  tags:['rooms'],
  auth: {
    mode: 'required'
  },
  handler: function(request, reply){
    Room.allRooms(function(err, rooms){
      if(rooms){
        reply(rooms).code(200);
      }else{
        reply(rooms).code(400);
      }
    });
  }
};
