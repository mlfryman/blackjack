'use strict';

module.exports = function(socket){
  socket.emit('online');
  //- when socket hears 'globalChat', it will run the function in globalChat.js
  socket.on('globalChat', require('./globalChat'));
  //- when socket hears 'roomChat', it will run the function in roomChat.js
  socket.on('roomChat', require('./roomChat'));
  //- when socket hears 'join', it will run the function in join.js
  socket.on('join', require('./join'));

  // *** SOCKET LOGGING *** //
  console.log('Socket Connected: ', socket.id);

  socket.on('disconnect', function(){
    console.log('Socket Disconnected: ', socket.id);
  });

  console.log('Active Sockets: ', this.sockets.length);
};
