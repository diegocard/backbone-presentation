var express = require('express');
var port = process.env.PORT || 3000;
var app = express.createServer();

app.use("media", express.static(path.join(__dirname, '/media')));
 
app.get('/', function(request, response) {
    response.sendfile(__dirname + '/index.html');
})

app.get('/en', function(request, response) {
    response.sendfile(__dirname + '/EN/backbone-presentation-en.html');
})

app.get('/es', function(request, response) {
    response.sendfile(__dirname + '/ES/backbone-presentation-es.html');
})

app.listen(port);