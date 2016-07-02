var express = require('express');
//var request = require('request');
// var bodyParser = require('body-parser');
var app = express();


app.set('port', 8080); //process.env.PORT || 1337


// everything inside client is public
app.use(express.static('./client')); // from server.js go to client folder

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ', app.get('port'));
})


// process.env.port || 3000 means: whatever is in the environment variable PORT, or 3000 if there's nothing there.
