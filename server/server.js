var express = require('express');
var request = require('request');
// var bodyParser = require('body-parser');
var app = express();


app.set('port', 8080); //process.env.PORT || 1337

//app.use('/api', routesTasks);
app.use(express.static('./client')); // everything inside client if public

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ', app.get('port'));
})



