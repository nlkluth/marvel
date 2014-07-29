'use strict';
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../..');
var md5 = require('MD5');

module.exports = {
  root: rootPath,
  port: process.env.PORT || 3000,
  marvel: 'https://gateway.marvel.com/v1',
  publicKey: '74dea3270f83de408d2618a7d9cb001f',
  privateKey: '40103bf3248445ab3408ce4910473556b13c46c6',
  generateHash: function(url) {
    var timestamp = Date.now();
    var hash = md5(timestamp + this.privateKey + this.publicKey);
    return this.marvel + url + '?ts=' + timestamp + '&apikey=' + this.publicKey + '&hash=' + hash;
  }
};
