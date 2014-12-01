(function(){
  'use strict';

  angular.module('blackjack')
    .controller('RoomsDetailCtrl', ['$rootScope', '$scope', '$state', 'Room', 'Game', function($rootScope, $scope, $state, Room, Game){
      $scope.messages = [];

      //- know if the game is yours via the cookie passed along with roomId
      Game.readyNewGame($state.params.roomId).then(function(){
        $scope.readyNewGame = true;
      });

      Room.find($state.params.roomId).then(function(response){
        $scope.room = response.data;
      });

      //- join this room
      socket.emit('join', {roomId:$state.params.roomId});

      $scope.chat = function(msg){
        //- use debugger to find which state you are in & how to find the roomId.
        //- debugger;
        //- Even though $state is global, it won't capture it unless you use it.  $state is defined once you use it.
        //- console.log($state);
        socket.emit('roomChat', {
          //- roomId comes from UIRouter
          roomID:$state.params.roomId,
          //- avatar is a string that references url to S3 bucket
          avatar:$rootScope.rootuser.avatar,
          body:msg
        });
      };

      //- turning off roomChat listener restricts to only 1 event listener for roomChat at a time.
      socket.off('roomChat');
      socket.on('roomChat', function(data){
        $scope.messages.unshift(data);
        $scope.messages = $scope.messages.slice(0, 100);
        //- set message to null once it comes back, otherwise you have no way to verify that the message was sent.
        $scope.message = null;
        $('#message').focus();
        $scope.$digest();
      });

  //- last brackets
  }]);
})();
