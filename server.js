// silly chrome wants SSL to do screensharing
var express = require('express');


var app = express();

process.env.PWD = process.cwd();

app.use(express.static(process.env.PWD));

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});
