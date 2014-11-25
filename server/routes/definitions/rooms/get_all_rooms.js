'use strict';

var Room = require('../../../models/room');

module.exports = {
  description: 'Get all Rooms',
  notes: 'Should return all rooms with a GET',
  tags:['rooms'],
  handler: function(request, reply){
    Room.find().populate('createdBy').exec(function(err, rooms){
      rooms = rooms.map(function(room){
        return {name: room.name, avatar: room.createdBy.avatar, createdAt: room.createdAt};
      });
      reply({rooms:rooms});
    });
  }
};
