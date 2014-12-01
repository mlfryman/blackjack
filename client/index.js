(function(){
  'use strict';

  angular.module('blackjack', ['ui.router', 'LocalForageModule'])
    .config(['$stateProvider', '$urlRouterProvider', '$localForageProvider', function($stateProvider, $urlRouterProvider, $localForageProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home',         {url:'/',                    templateUrl:'/views/home/home.html'})
        .state('register',     {url:'/register',            templateUrl:'/views/users/users.html',        controller:'UsersCtrl'})
        .state('login',        {url:'/login',               templateUrl:'/views/users/users.html',        controller:'UsersCtrl'})
        .state('rooms',        {url:'/rooms',               templateUrl:'/views/rooms/rooms.html',        abstract:true})
        .state('rooms.list',   {url:'',                     templateUrl:'/views/rooms/rooms_list.html',   controller:'RoomsListCtrl'})
        //- regex url validator that can only be lowercase a-f, numbers 0-9, & 24 characters long
        .state('rooms.detail', {url:'/{roomId:[a-f0-9]{24}}', templateUrl:'/views/rooms/rooms_detail.html', controller:'RoomsDetailCtrl'});


      $localForageProvider.config({name:'blackjack', storeName:'cache', version:1.0});
    }])
    
    .run(['$rootScope', '$http', function($rootScope, $http){
      window.socket = io.connect();
      window.socket.on('online', function(){
        if($rootScope.rootuser && socket.connected){
          $http.put('/users/' + $rootScope.rootuser._id, {socketId:socket.io.engine.id});
          $rootScope.online = true;
          $rootScope.$apply();
        }
      });

      $http.get('/status').then(function(response){
        $rootScope.rootuser = response.data;
      }, function(){
        $rootScope.rootuser = null;
      });
    }]);
})();
