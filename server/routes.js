'use strict';

module.exports = function(app) {
  var index = require('./controllers/index');
  var characters = require('./controllers/characters');

  app.get('/', index.render);
  app.get('/api/characters', characters.list);
};
