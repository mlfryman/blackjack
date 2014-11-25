(function(){
  'use strict';

  angular.module('blackjack')
    .controller('RoomsListCtrl', ['$rootScope', '$scope', '$state', function($rootScope, $scope, $state){
      $scope.chat = function(msg){
        socket.emit('globalChat', {
            avatar: $rootScope.rootuser.avatar,
            body: msg
        });
        $scope.message = '';
    };

    socket.on('bGlobalChat', function(message){
      $('#messages').append('<div class="chat" ><img class="chat-avatar", src="'+ message.avatar +'"/>' + message.body + '</div><hr />');
    });

  //- last brackets
  }]);
})();
