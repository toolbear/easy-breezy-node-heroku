var express = require('express');

var app = express.createServer(express.logger(), express.static(__dirname + '/public'));

app.get('/login', function(req, res) {
  res.redirect('/login.html');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
