'use strict';

var request = require('request');
var config = require('../config/config');
var md5 = require('MD5');
var debug = require('debug')('shim:characters');

exports.list = function(req, res) {
  var timestamp = Date.now();
  var publicKey = '74dea3270f83de408d2618a7d9cb001f';
  var privateKey = '40103bf3248445ab3408ce4910473556b13c46c6';

  var hash = md5(timestamp+privateKey+publicKey);
  var url = config.marvel + '/public/characters?ts=' + timestamp + '&apikey=74dea3270f83de408d2618a7d9cb001f&hash=' + hash;

  debug('requesting %s', url);

  request(url, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      res.send(body);
    }
  });
};
