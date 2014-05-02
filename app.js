var express = require('express');
var app = express();
var config = require('./server/config/config');

// routes
require('./server/routes')(app);

// express settings
require('./server/config/express')(app, config);

var port = process.env.PORT || 9000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});
