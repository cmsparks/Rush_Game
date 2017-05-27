(function() {
  var app, compression, express, helmet, http, io, server;

  helmet = require('helmet');

  compression = require('compression');

  express = require('express');

  http = require('http');

  app = express();

  server = app.listen(process.env.PORT || 3000);

  io = require('socket.io')(server);

  app.use(helmet());

  app.use(compression());

  app.use(express["static"]('build/public'));

}).call(this);
