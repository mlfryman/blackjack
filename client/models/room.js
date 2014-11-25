(function(){
  'use strict';

  angular.module('blackjack')
    .factory('Room', ['$http', function($http){

      function join(room){
        return $http.post('/join', room);
      }

      function create(room){
        return $http.post('/create', room);
      }

      function getRooms(){
        return $http.get('/logout');
      }

      return {join:join, create:create, getRooms:getRooms};
    }]);
})();
