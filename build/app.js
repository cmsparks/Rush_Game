(function() {
  var app, compression, express, helmet, http, io, players, questions, server, start;

  helmet = require('helmet');

  compression = require('compression');

  express = require('express');

  http = require('http');

  app = express();

  server = app.listen(process.env.PORT || 3004);

  io = require('socket.io')(server);

  questions = {
    "data": [
      {
        "name": "What is a man?",
        "choices": ["a creature", "a woman", "a pinapple", "rollsy"],
        "correct": ["a creature"]
      }, {
        "name": "question",
        "choices": ["a", "b", "c", "d"],
        "correct": ["a"]
      }, {
        "name": "question2",
        "choices": ["a", "b", "c", "d"],
        "correct": ["a"]
      }, {
        "name": "question3",
        "choices": ["a", "b", "c", "d"],
        "correct": ["a"]
      }, {
        "name": "question4",
        "choices": ["a", "b", "c", "d"],
        "correct": ["a"]
      }, {
        "name": "question5",
        "choices": ["a", "b", "c", "d"],
        "correct": ["a"]
      }, {
        "name": "question6",
        "choices": ["a", "b", "c", "d"],
        "correct": ["a"]
      }, {
        "name": "question7",
        "choices": ["a", "b", "c", "d"],
        "correct": ["a"]
      }, {
        "name": "question8",
        "choices": ["a", "b", "c", "d"],
        "correct": ["a"]
      }, {
        "name": "question9",
        "choices": ["a", "b", "c", "d"],
        "correct": ["a"]
      }
    ]
  };

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
