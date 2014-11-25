'use strict';

module.exports = [
  {method: 'GET',    path: '/{param*}',        config: require('../definitions/general/static')},
  //- users routes
  {method: 'POST',   path: '/register',        config: require('../definitions/users/post_register')},
  {method: 'POST',   path: '/login',           config: require('../definitions/users/post_login')},
  {method: 'DELETE', path: '/logout',          config: require('../definitions/users/delete_logout')},
  {method: 'GET',    path: '/status',          config: require('../definitions/users/get_status')},
  //- rooms routes
  {method: 'POST',   path: '/rooms/create',    config: require('../definitions/rooms/post_create')},
  {method: 'POST',   path: '/rooms/join',      config: require('../definitions/rooms/post_join')},
  {method: 'GET',    path: '/rooms/allrooms',  config: require('../definitions/rooms/get_all_rooms')}
];
