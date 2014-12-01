'use strict';

module.exports = function(data){
  var socket = this;
  //- emit data to everyone in this room
  socket.to(data.roomId).emit('roomChat', data);
  socket.emit('roomChat', data);
};
