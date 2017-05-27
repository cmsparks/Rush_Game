helmet = require 'helmet'
compression = require 'compression'
express = require 'express'
http = require 'http'

app = express()
server = app.listen process.env.PORT or 3000
io = require('socket.io') server

questions = undefined
players = []
stage = 'questions'

app.use helmet()
app.use compression()
app.get '/', (req, res, next) ->
  if stage == 'game'
    res.redirect('/game/')
  else
    next()
app.use express.static 'build/public'

io.on 'connection', (socket) ->
  socket.on 'questions', (questions_) ->
    questions = questions_
    stage = 'players'
  socket.on 'player', (player) ->
    players.push(player)
