var path = require('path');
var rootPath = path.normalize(__dirname + '/../../..');

module.exports = {
  root: rootPath,
  port: process.env.PORT || 3000,
  marvel: 'https://gateway.marvel.com/v1'
};
