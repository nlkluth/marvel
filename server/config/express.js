'use strict';
var express = require('express');

module.exports = function (app, config) {

  app.set('showStackError', true);
  app.use(express.static(config.root + '/public'));

  app.set('views', config.root + '/server/views');
  app.set('view engine', 'jade');

  app.use(function(err, req, res, next){
    // treat as 404
    if (~err.message.indexOf('not found')) {
      return next();
    }

    // log it
    console.error(err.stack);

    // error page
    res.status(500).render('500', { error: err.stack });
  });

  // assume 404 since no middleware responded
  app.use(function(req, res) {
    res.status(404).render('404', { url: req.originalUrl, error: 'Not found' });
  });
};
