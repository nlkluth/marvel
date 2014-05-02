'use strict';

module.exports = function (app, config) {
  app.set('views', config.root + '/server/views');
  app.set('view engine', 'jade');
};
