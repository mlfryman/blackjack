'use strict';

module.exports = {
  description: 'Asset Routes',
  tags:['general'],
  auth: false,
  handler: {
    directory: {
      path: __dirname + '/../../../../assets'
    }
  }
};
