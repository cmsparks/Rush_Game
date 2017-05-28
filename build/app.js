(function() {
  var app, compression, express, helmet, http, io, players, questions, server, start;

  helmet = require('helmet');

  compression = require('compression');

  express = require('express');

  http = require('http');

  app = express();

  server = app.listen(process.env.PORT || 3004);

  io = require('socket.io')(server);

  questions = {};

  players = [];

  start = false;

  app.use(helmet());

  app.use(compression());

  app.get('/', function(req, res) {
    return res.redirect(303, '/student/login');
  });

  app.get('/student/game', function(req, res, next) {
    if (start) {
      return res.redirect(303, '/student/no_entry');
    } else {
      return next();
    }
  });

  app.use(express["static"]('build/public'));

  io.on('connection', function(socket) {
    socket.on('questions', function(questions_) {
      return questions = questions_;
    });
    socket.on('player', function(player) {
      if (!start) {
        players.push(player);
      }
      return socket.emit('player_success');
    });
    return socket.on('start_thing', function() {
      start = true;
      return socket.broadcast.emit('questions', questions);
    });
  });

}).call(this);
