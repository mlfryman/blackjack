'use strict';

module.exports = function(data){
  var socket = this;
  //- sends message back to person who created message
  socket.emit('globalChat', data);
  //- sends message out to all other socket connections (- yourself)
  socket.broadcast.emit('globalChat', data);
};
