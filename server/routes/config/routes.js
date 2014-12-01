'use strict';

module.exports = [
  {method: 'GET',    path: '/{param*}',        config: require('../definitions/general/static')},
  //- users routes
  {method: 'POST',   path: '/register',        config: require('../definitions/users/post_register')},
  {method: 'POST',   path: '/login',           config: require('../definitions/users/post_login')},
  {method: 'DELETE', path: '/logout',          config: require('../definitions/users/delete_logout')},
  {method: 'GET',    path: '/status',          config: require('../definitions/users/get_status')},
  {method: 'PUT',    path: '/users/{userId}',  config: require('../definitions/users/put_user_socket')},
  //- rooms routes
  {method: 'POST',   path: '/rooms',           config: require('../definitions/rooms/post_create')},
  {method: 'GET',    path: '/rooms',           config: require('../definitions/rooms/get_all_rooms')},
  {method: 'POST',   path: '/rooms/{name}',    config: require('../definitions/rooms/post_join')},
  {method: 'GET',    path: '/rooms/{roomId}',  config: require('../definitions/rooms/get_rooms_find')},
  // {method: 'GET',    path: '/rooms/{roomId}/readyNewGame',  config: require('../definitions/rooms/get_rooms_readynewgame')}
];
