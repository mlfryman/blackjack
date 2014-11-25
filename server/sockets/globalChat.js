'use strict';

module.exports = function(data){
  var socket = this;
  socket.emit('bGlobalChat', data);
  socket.broadcast.emit('bGlobalChat', data);
};
