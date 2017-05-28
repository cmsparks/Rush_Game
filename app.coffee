helmet = require 'helmet'
compression = require 'compression'
express = require 'express'
http = require 'http'

app = express()
server = app.listen process.env.PORT or 3004
io = require('socket.io') server

questions = {}
players = []
start = false

app.use helmet()
app.use compression()
app.get '/', (req, res) ->
  res.redirect(303, '/student/login')
app.get '/student/game', (req, res, next) ->
  if start
    res.redirect(303, '/student/no_entry')
  else
    next()
app.use express.static 'build/public'

io.on 'connection', (socket) ->
  # console.log(players)
  # # setInterval(-> 
  # #   socket.emit('asdf')
  # # , 1000)
  # console.log(start)

  socket.on 'questions', (questions_) ->
    questions = questions_
    # console.log('questions')

  socket.on 'player', (player) ->
    if not start
      players.push(player)
      # console.log(player)
    socket.emit 'player_success'

  socket.on 'start_thing', ->
    start = true
    # socket.broadcast.emit('first_question')
    socket.broadcast.emit('questions', questions)


