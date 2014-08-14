'use strict';

var request = require('request');
var config = require('../config/config');
var debug = require('debug')('shim:characters');

exports.list = function(req, res) {
  var url = config.generateUrl('/public/characters');
  debug('requesting %s', url);

  request(url, function(error, response, body) {
    if (error) {
      res.send(error, 500);
    }

    if (!error && response.statusCode === 200) {
      res.send(body);
    }
  });
};

exports.detail = function(req, res) {
  var url = config.generateUrl('/public/characters/' + req.params.id);
  debug ('requesting %s', url);

  request(url, function(error, response, body) {
    if (error) {
      res.send(error, 500);
    }

    if (!error && response.statusCode === 200) {
      res.send(body);
    }
  });
};
