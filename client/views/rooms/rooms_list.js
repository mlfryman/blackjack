(function(){
  'use strict';

  angular.module('blackjack')
    .controller('RoomsListCtrl', ['$rootScope', '$scope', '$state', function($rootScope, $scope, $state){

      $scope.chat = function(msg){
        socket.emit('globalChat', msg);
      };

      socket.on('bGlobalChat', function(data){
        $('#messages').append('<div>' + data + '</div>');
      });

    }]);
})();
