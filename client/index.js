(function(){
  'use strict';

  angular.module('hapi-auth', ['ui.router', 'LocalForageModule'])
    .config(['$stateProvider', '$urlRouterProvider', '$localForageProvider', function($stateProvider, $urlRouterProvider, $localForageProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home',       {url:'/',         templateUrl:'/views/home/home.html'})
        .state('register',   {url:'/register', templateUrl:'/views/users/users.html',      controller:'UsersCtrl'})
        .state('login',      {url:'/login',    templateUrl:'/views/users/users.html',      controller:'UsersCtrl'})
        .state('rooms',      {url:'/rooms',    templateUrl:'/views/rooms/rooms.html',      abstract:true})
        .state('rooms.list', {url:'',          templateUrl:'/views/rooms/rooms_list.html', controller:'RoomsListCtrl'});

      $localForageProvider.config({name:'hapi-auth', storeName:'cache', version:1.0});
    }])
    .run(['$rootScope', '$http', function($rootScope, $http){
      $http.get('/status').then(function(response){
        $rootScope.rootuser = response.data;
      }, function(){
        $rootScope.rootuser = null;
      });

      window.socket = io.connect('/');
      window.socket.on('online', function(){
        $rootScope.$broadcast('online');
      });
    }]);
})();
