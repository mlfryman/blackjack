'use strict';

//- runs as soon as controller is called
module.exports = function(data){
  var socket = this;
  socket.join(data.roomId);
};
