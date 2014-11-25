'use strict';

module.exports = [
  {method: 'get',    path: '/{param*}',        config: require('../definitions/general/static')},
  {method: 'get',    path: '/assets/{param*}', config: require('../definitions/general/assets')},
  {method: 'post',   path: '/register',        config: require('../definitions/users/post_register')},
  {method: 'post',   path: '/login',           config: require('../definitions/users/post_login')},
  {method: 'delete', path: '/logout',          config: require('../definitions/users/delete_logout')},
  {method: 'get',    path: '/status',          config: require('../definitions/users/get_status')}
];
