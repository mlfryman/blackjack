(function(){
  'use strict';

  angular.module('blackjack')
    .controller('RoomsListCtrl', ['$rootScope', '$scope', '$state', 'Room', function($rootScope, $scope, $state, Room){
      $scope.room = {};
      $scope.chat = function(msg){
        socket.emit('globalChat', {
            avatar: $rootScope.rootuser.avatar,
            body: msg
        });
        $scope.message = '';
      };

      $scope.createRoom = function(){
        Room.create($scope.room).then(function(response){
          toastr.success('Room successfully created.');
          $state.go('rooms.list');
        }, function(){
          toastr.error('Error creating room; room name must be unique. Please try again.');
          $scope.room = {};
        });
      };

      socket.on('bGlobalChat', function(message){
        $('#messages').append('<div class="chat" ><img class="chat-avatar", src="'+ message.avatar +'"/>' + message.body + '</div><hr />');
      });

  //- last brackets
  }]);
})();
