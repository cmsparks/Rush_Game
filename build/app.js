(function() {
  var app, compression, express, helmet, http, io, players, questions, server, stage;

  helmet = require('helmet');

  compression = require('compression');

  express = require('express');

  http = require('http');

  app = express();

  server = app.listen(process.env.PORT || 3000);

  io = require('socket.io')(server);

  questions = void 0;

  players = void 0;

  stage = 'prep';

  app.use(helmet());

  app.use(compression());

  app.get('/', function(req, res, next) {
    if (stage === 'game') {
      return res.redirect('/game/');
    } else {
      return next();
    }
  });

  app.use(express["static"]('build/public'));

  io.on('connection', function(socket) {
    socket.on('questions', function(questions_) {
      return questions = questions_;
    });
    return socket.on('players', function(players_) {
      return players = players_;
    });
  });

}).call(this);
