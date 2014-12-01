(function(){
  'use strict';

  angular.module('blackjack')
    .factory('Room', ['$http', function($http){

      function create(room){
        return $http.post('/rooms', room);
      }

      function getRooms(room){
        return $http.get('/rooms');
      }

      function join(room){
        return $http.post('/rooms/' + room.name, {password: room.password});
      }

      function find(roomId){
        return $http.get('/rooms/' + roomId);
      }

      return {create:create, getRooms:getRooms, join:join, find:find};
    }]);
})();
