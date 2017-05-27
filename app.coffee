helmet = require 'helmet'
compression = require 'compression'
express = require 'express'
http = require 'http'

app = express()
server = app.listen process.env.PORT or 3000
io = require('socket.io') server

questions = undefined
players = []

app.use helmet()
app.use compression()
app.get '/', (req, res) ->
  res.redirect(303, 'student/login')
app.use express.static 'build/public'

io.on 'connection', (socket) ->
  socket.on 'questions', (questions_) ->
    questions = questions_
    console.log('questions')

  socket.on 'player', (player) ->
    players.push(player)

  socket.on 'start', ->
    console.log('start')
    socket.emit 'start'
