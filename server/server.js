var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var routesTasks = require('./routes/routesTasks');

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //res.header('Access...........')
  next();
});

app.set('port'), process.env.PORT || 1337);

app.use('/api', routesTasks);
app.use(express.static('./client'));

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ', app.get('port'));
})
