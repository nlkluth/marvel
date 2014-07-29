'use strict';

var request = require('request');
var config = require('../config/config');
var debug = require('debug')('shim:characters');

exports.list = function(req, res) {
  var url = config.generateUrl('/public/characters');
  debug('requesting %s', url);

  request(url, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      res.send(body);
    }
  });
};
