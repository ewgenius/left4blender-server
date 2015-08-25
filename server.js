var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
});

var rooms = {};

io.on('connection', function(socket) {
    console.log('connected');

    socket.on('disconnect', function(){
        console.log('disconnected');
    });
});

server.listen(3000, function() {

});