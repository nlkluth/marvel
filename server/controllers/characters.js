'use strict';

var debug = require('debug')('shim:characters');

exports.list = function(req, res) {
  debug('hit list');
  res.send('hello world');
};
