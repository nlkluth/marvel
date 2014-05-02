'use strict';

module.exports = function (app, config) {
  app.set('views', config.root + '/app/views');
  app.set('view engine', 'jade');
};
