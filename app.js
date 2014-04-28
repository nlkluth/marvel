var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.sendfile('./public/index.html');
});

var port = process.env.PORT || 9000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});
