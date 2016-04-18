var express = require('express');
var ParseServer = require('parse-server').ParseServer;

// Configure the Parse API
var api = new ParseServer({
  databaseURI: 'mongodb://localhost:27017',
  cloud: __dirname + '/cloud/main.js',
  appId: 'petty-sss-app',
  masterKey: 'v1L0ua6n0CdYdTOtY0O6CCUO2Xa5kr4I',
  serverURL: 'http://localhost:1337/parse'
});

var app = express();

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

// Listen for connections on port 1337
var port = 1337;
app.listen(port, function() {
    console.log('parse-server-example running on port ' + port + '.');
});