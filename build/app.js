(function() {
  var app, compression, express, helmet, http, io, players, questions, server;

  helmet = require('helmet');

  compression = require('compression');

  express = require('express');

  http = require('http');

  app = express();

  server = app.listen(process.env.PORT || 3000);

  io = require('socket.io')(server);

  questions = void 0;

  players = [];

  app.use(helmet());

  app.use(compression());

  app.get('/', function(req, res) {
    return res.redirect(303, 'student/login');
  });

  app.use(express["static"]('build/public'));

  io.on('connection', function(socket) {
    socket.on('questions', function(questions_) {
      questions = questions_;
      return console.log('questions');
    });
    socket.on('player', function(player) {
      return players.push(player);
    });
    return socket.on('start', function() {
      console.log('start');
      return socket.emit('start');
    });
  });

}).call(this);
