(function(){
  'use strict';

  angular.module('blackjack')
    .controller('RoomsListCtrl', ['$rootScope', '$scope', '$state', 'Room', function($rootScope, $scope, $state, Room){
      $scope.messages = [];
      $scope.room = {};
      $scope.rooms = [];

      $scope.chat = function(msg){
        socket.emit('globalChat', {
            avatar: $rootScope.rootuser.avatar,
            //- or content:msg;
            body: msg
        });
        $scope.message = '';
      };

      $scope.createRoom = function(room){
        Room.create(room).then(function(response){
          toastr.success('Room successfully created.');
          $scope.rooms.push(response.data);
          $scope.room = {};
          $scope.error = false;
        }, function(){
          toastr.error('Error creating room. Please try again.');
          $scope.error = true;
        });
      };

      $scope.join = function(room){
        Room.join({name: room.name, password: this.password}).then(function(response){
          var roomId = response.data.roomId;
          $state.go('rooms.detail', {roomId:roomId});
          $scope.error = false;
        }, function(){
          toastr.error('Password is incorrect. Please try again.');
          $scope.error = true;
        });
      };

      Room.getRooms().then(function(response){
        $scope.rooms = response.data.rooms;
      });

      //- turning off globalChat listener restricts to only 1 event listener for globalChat at a time
      socket.off('globalChat');
      socket.on('globalChat', function(data){
        $scope.messages.unshift(data);
        $scope.messages = $scope.messages.slice(0, 100);
        $scope.message = null;
        $('#message').focus();
        $scope.$digest();
      });

  //- last brackets
  }]);
})();
